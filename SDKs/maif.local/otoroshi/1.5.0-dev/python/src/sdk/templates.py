import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Templates:
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

    
    def initiate_api_key(self, request: operations.InitiateAPIKeyRequest) -> operations.InitiateAPIKeyResponse:
        r"""Get a template of an Otoroshi Api Key
        Get a template of an Otoroshi Api Key. The generated entity is not persisted
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/new/apikey"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.InitiateAPIKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.APIKey])
                res.api_key = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def initiate_service(self, request: operations.InitiateServiceRequest) -> operations.InitiateServiceResponse:
        r"""Get a template of an Otoroshi service descriptor
        Get a template of an Otoroshi service descriptor. The generated entity is not persisted
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/new/service"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.InitiateServiceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Service])
                res.service = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def initiate_service_group(self, request: operations.InitiateServiceGroupRequest) -> operations.InitiateServiceGroupResponse:
        r"""Get a template of an Otoroshi service group
        Get a template of an Otoroshi service group. The generated entity is not persisted
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/new/group"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.InitiateServiceGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Group])
                res.group = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    