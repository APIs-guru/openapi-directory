import requests
from typing import List,Optional
from sdk.models import shared, operations
from . import utils

class Environments:
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

    
    def all_lines(self, request: operations.AllLinesRequest) -> operations.AllLinesResponse:
        r"""Get all environments
        Get all environments provided by the current Otoroshi instance
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/lines"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AllLinesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                res.environment = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def services_for_a_line(self, request: operations.ServicesForALineRequest) -> operations.ServicesForALineResponse:
        r"""Get all services for an environment
        Get all services for an environment provided by the current Otoroshi instance
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/lines/{line}/services", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ServicesForALineResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.Service]])
                res.services = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    