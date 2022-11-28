import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Blocks:
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

    
    def append_block_children(self, request: operations.AppendBlockChildrenRequest) -> operations.AppendBlockChildrenResponse:
        r"""Append block children
        Append block children
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/blocks/{id}/children", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AppendBlockChildrenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AppendBlockChildren200ApplicationJSON])
                res.append_block_children_200_application_json_object = out

        return res

    
    def retrieve_a_block(self, request: operations.RetrieveABlockRequest) -> operations.RetrieveABlockResponse:
        r"""Retrieve a block
        Retrieve a block
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/blocks/{id}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RetrieveABlockResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RetrieveABlock200ApplicationJSON])
                res.retrieve_a_block_200_application_json_object = out

        return res

    
    def retrieve_block_children(self, request: operations.RetrieveBlockChildrenRequest) -> operations.RetrieveBlockChildrenResponse:
        r"""Retrieve block children
        Retrieve block children
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/blocks/{id}/children", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RetrieveBlockChildrenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RetrieveBlockChildren200ApplicationJSON])
                res.retrieve_block_children_200_application_json_object = out

        return res

    
    def update_a_block(self, request: operations.UpdateABlockRequest) -> operations.UpdateABlockResponse:
        r"""Update a block
        This endpoint allows you to update block content. [See Full Documentation](https://developers.notion.com/reference/update-a-block)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/blocks/{id}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("PATCH", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateABlockResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UpdateABlock200ApplicationJSON])
                res.update_a_block_200_application_json_object = out

        return res

    