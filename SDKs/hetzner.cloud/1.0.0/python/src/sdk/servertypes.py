import requests
from typing import Optional
from sdk.models import operations
from . import utils

class ServerTypes:
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

    
    def get_server_types(self, request: operations.GetServerTypesRequest) -> operations.GetServerTypesResponse:
        r"""Get all Server Types
        Gets all Server type objects.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/server_types"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetServerTypesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetServerTypes200ApplicationJSON])
                res.get_server_types_200_application_json_object = out

        return res

    
    def get_server_types_id_(self, request: operations.GetServerTypesIDRequest) -> operations.GetServerTypesIDResponse:
        r"""Get a Server Type
        Gets a specific Server type object.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/server_types/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetServerTypesIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetServerTypesID200ApplicationJSON])
                res.get_server_types_id_200_application_json_object = out

        return res

    