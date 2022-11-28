import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Kvpairs:
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

    
    def add_kv_pairs(self, request: operations.AddKvPairsRequest) -> operations.AddKvPairsResponse:
        r"""Create key-value pair
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/kvpairs"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddKvPairsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResponseDefaultResource])
                res.response_default_resource = out

        return res

    
    def delete_kv_pair(self, request: operations.DeleteKvPairRequest) -> operations.DeleteKvPairResponse:
        r"""Delete key-value pair
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/kvpairs/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteKvPairResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResponseDefaultResource])
                res.response_default_resource = out

        return res

    
    def get_kv_pairs(self, request: operations.GetKvPairsRequest) -> operations.GetKvPairsResponse:
        r"""Get all key-value pairs
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/kvpairs"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetKvPairsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetKvPairs200ApplicationJSON])
                res.get_kv_pairs_200_application_json_object = out

        return res

    
    def get_kv_pairs_by_id(self, request: operations.GetKvPairsByIDRequest) -> operations.GetKvPairsByIDResponse:
        r"""Get key-value pair
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/kvpairs/{id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetKvPairsByIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.KeyValuePair])
                res.key_value_pair = out

        return res

    
    def update_kv_pair(self, request: operations.UpdateKvPairRequest) -> operations.UpdateKvPairResponse:
        r"""Update existing Key-value pair
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/kvpairs/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateKvPairResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResponseDefaultResource])
                res.response_default_resource = out

        return res

    