import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Pos:
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

    
    def content_pos_custombatch(self, request: operations.ContentPosCustombatchRequest) -> operations.ContentPosCustombatchResponse:
        r"""Batches multiple POS-related calls in a single request.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/pos/batch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentPosCustombatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PosCustomBatchResponse])
                res.pos_custom_batch_response = out

        return res

    
    def content_pos_delete(self, request: operations.ContentPosDeleteRequest) -> operations.ContentPosDeleteResponse:
        r"""Deletes a store for the given merchant.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/pos/{targetMerchantId}/store/{storeCode}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentPosDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def content_pos_get(self, request: operations.ContentPosGetRequest) -> operations.ContentPosGetResponse:
        r"""Retrieves information about the given store.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/pos/{targetMerchantId}/store/{storeCode}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentPosGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PosStore])
                res.pos_store = out

        return res

    
    def content_pos_insert(self, request: operations.ContentPosInsertRequest) -> operations.ContentPosInsertResponse:
        r"""Creates a store for the given merchant.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/pos/{targetMerchantId}/store", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentPosInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PosStore])
                res.pos_store = out

        return res

    
    def content_pos_inventory(self, request: operations.ContentPosInventoryRequest) -> operations.ContentPosInventoryResponse:
        r"""Submit inventory for the given merchant.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/pos/{targetMerchantId}/inventory", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentPosInventoryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PosInventoryResponse])
                res.pos_inventory_response = out

        return res

    
    def content_pos_list(self, request: operations.ContentPosListRequest) -> operations.ContentPosListResponse:
        r"""Lists the stores of the target merchant.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/pos/{targetMerchantId}/store", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentPosListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PosListResponse])
                res.pos_list_response = out

        return res

    
    def content_pos_sale(self, request: operations.ContentPosSaleRequest) -> operations.ContentPosSaleResponse:
        r"""Submit a sale event for the given merchant.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/pos/{targetMerchantId}/sale", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentPosSaleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PosSaleResponse])
                res.pos_sale_response = out

        return res

    