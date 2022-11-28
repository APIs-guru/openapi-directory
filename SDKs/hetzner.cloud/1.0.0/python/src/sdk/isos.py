import requests
from typing import Optional
from sdk.models import operations
from . import utils

class IsOs:
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

    
    def get_isos(self, request: operations.GetIsosRequest) -> operations.GetIsosResponse:
        r"""Get all ISOs
        Returns all available ISO objects.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/isos"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetIsosResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetIsos200ApplicationJSON])
                res.get_isos_200_application_json_object = out

        return res

    
    def get_isos_id_(self, request: operations.GetIsosIDRequest) -> operations.GetIsosIDResponse:
        r"""Get an ISO
        Returns a specific ISO object.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/isos/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetIsosIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetIsosID200ApplicationJSON])
                res.get_isos_id_200_application_json_object = out

        return res

    