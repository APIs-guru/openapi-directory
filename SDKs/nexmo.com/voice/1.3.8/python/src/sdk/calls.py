import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Calls:
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

    
    def create_call(self, request: operations.CreateCallRequest) -> operations.CreateCallResponse:
        r"""Create an outbound call
        Create an outbound Call
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateCallResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreateCallResponse])
                res.create_call_response = out

        return res

    
    def get_call(self, request: operations.GetCallRequest) -> operations.GetCallResponse:
        r"""Get detail of a specific call
        Get detail of a specific call
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{uuid}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCallResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetCallResponse])
                res.get_call_response = out

        return res

    
    def get_calls(self, request: operations.GetCallsRequest) -> operations.GetCallsResponse:
        r"""Get details of your calls
        Get details of your calls
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCallsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetCallsResponse])
                res.get_calls_response = out

        return res

    
    def update_call(self, request: operations.UpdateCallRequest) -> operations.UpdateCallResponse:
        r"""Modify an in progress call
        Modify an in progress call
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{uuid}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateCallResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    