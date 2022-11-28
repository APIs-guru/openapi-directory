import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Productdeliverytime:
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

    
    def content_productdeliverytime_create(self, request: operations.ContentProductdeliverytimeCreateRequest) -> operations.ContentProductdeliverytimeCreateResponse:
        r"""Creates or updates the delivery time of a product.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/productdeliverytime", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentProductdeliverytimeCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProductDeliveryTime])
                res.product_delivery_time = out

        return res

    
    def content_productdeliverytime_delete(self, request: operations.ContentProductdeliverytimeDeleteRequest) -> operations.ContentProductdeliverytimeDeleteResponse:
        r"""Deletes the delivery time of a product.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/productdeliverytime/{productId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentProductdeliverytimeDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def content_productdeliverytime_get(self, request: operations.ContentProductdeliverytimeGetRequest) -> operations.ContentProductdeliverytimeGetResponse:
        r"""Gets `productDeliveryTime` by `productId`.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/productdeliverytime/{productId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentProductdeliverytimeGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProductDeliveryTime])
                res.product_delivery_time = out

        return res

    