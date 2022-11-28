import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class APIInformation:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def get_api_version(self) -> operations.GetAPIVersionResponse:
        r"""API version
        Retrieves API Specification version information
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/version"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIVersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIVersion])
                res.api_version = out

        return res

    
    def get_health(self) -> operations.GetHealthResponse:
        r"""Service health
        Tests basic health of the service
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/health"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHealthResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIHealthStatus])
                res.api_health_status = out

        return res

    