import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class GuaranteedOrders:
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

    
    def displayvideo_guaranteed_orders_create(self, request: operations.DisplayvideoGuaranteedOrdersCreateRequest) -> operations.DisplayvideoGuaranteedOrdersCreateResponse:
        r"""Creates a new guaranteed order. Returns the newly created guaranteed order if successful.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/guaranteedOrders"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoGuaranteedOrdersCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GuaranteedOrder])
                res.guaranteed_order = out

        return res

    
    def displayvideo_guaranteed_orders_edit_guaranteed_order_read_accessors(self, request: operations.DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsRequest) -> operations.DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsResponse:
        r"""Edits read advertisers of a guaranteed order.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/guaranteedOrders/{guaranteedOrderId}:editGuaranteedOrderReadAccessors", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoGuaranteedOrdersEditGuaranteedOrderReadAccessorsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EditGuaranteedOrderReadAccessorsResponse])
                res.edit_guaranteed_order_read_accessors_response = out

        return res

    
    def displayvideo_guaranteed_orders_get(self, request: operations.DisplayvideoGuaranteedOrdersGetRequest) -> operations.DisplayvideoGuaranteedOrdersGetResponse:
        r"""Gets a guaranteed order.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/guaranteedOrders/{guaranteedOrderId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoGuaranteedOrdersGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GuaranteedOrder])
                res.guaranteed_order = out

        return res

    
    def displayvideo_guaranteed_orders_list(self, request: operations.DisplayvideoGuaranteedOrdersListRequest) -> operations.DisplayvideoGuaranteedOrdersListResponse:
        r"""Lists guaranteed orders that are accessible to the current user. The order is defined by the order_by parameter. If a filter by entity_status is not specified, guaranteed orders with entity status `ENTITY_STATUS_ARCHIVED` will not be included in the results.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/guaranteedOrders"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoGuaranteedOrdersListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListGuaranteedOrdersResponse])
                res.list_guaranteed_orders_response = out

        return res

    
    def displayvideo_guaranteed_orders_patch(self, request: operations.DisplayvideoGuaranteedOrdersPatchRequest) -> operations.DisplayvideoGuaranteedOrdersPatchResponse:
        r"""Updates an existing guaranteed order. Returns the updated guaranteed order if successful.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/guaranteedOrders/{guaranteedOrderId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DisplayvideoGuaranteedOrdersPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GuaranteedOrder])
                res.guaranteed_order = out

        return res

    