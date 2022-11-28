import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Returnpolicy:
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

    
    def content_returnpolicy_custombatch(self, request: operations.ContentReturnpolicyCustombatchRequest) -> operations.ContentReturnpolicyCustombatchResponse:
        r"""Batches multiple return policy related calls in a single request.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/returnpolicy/batch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentReturnpolicyCustombatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReturnpolicyCustomBatchResponse])
                res.returnpolicy_custom_batch_response = out

        return res

    
    def content_returnpolicy_delete(self, request: operations.ContentReturnpolicyDeleteRequest) -> operations.ContentReturnpolicyDeleteResponse:
        r"""Deletes a return policy for the given Merchant Center account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/returnpolicy/{returnPolicyId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentReturnpolicyDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def content_returnpolicy_get(self, request: operations.ContentReturnpolicyGetRequest) -> operations.ContentReturnpolicyGetResponse:
        r"""Gets a return policy of the Merchant Center account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/returnpolicy/{returnPolicyId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentReturnpolicyGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReturnPolicy])
                res.return_policy = out

        return res

    
    def content_returnpolicy_insert(self, request: operations.ContentReturnpolicyInsertRequest) -> operations.ContentReturnpolicyInsertResponse:
        r"""Inserts a return policy for the Merchant Center account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/returnpolicy", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentReturnpolicyInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReturnPolicy])
                res.return_policy = out

        return res

    
    def content_returnpolicy_list(self, request: operations.ContentReturnpolicyListRequest) -> operations.ContentReturnpolicyListResponse:
        r"""Lists the return policies of the Merchant Center account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/returnpolicy", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentReturnpolicyListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReturnpolicyListResponse])
                res.returnpolicy_list_response = out

        return res

    