import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Productstatuses:
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

    
    def content_productstatuses_custombatch(self, request: operations.ContentProductstatusesCustombatchRequest) -> operations.ContentProductstatusesCustombatchResponse:
        r"""Gets the statuses of multiple products in a single request.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/productstatuses/batch"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentProductstatusesCustombatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProductstatusesCustomBatchResponse])
                res.productstatuses_custom_batch_response = out

        return res

    
    def content_productstatuses_get(self, request: operations.ContentProductstatusesGetRequest) -> operations.ContentProductstatusesGetResponse:
        r"""Gets the status of a product from your Merchant Center account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/productstatuses/{productId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentProductstatusesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProductStatus])
                res.product_status = out

        return res

    
    def content_productstatuses_list(self, request: operations.ContentProductstatusesListRequest) -> operations.ContentProductstatusesListResponse:
        r"""Lists the statuses of the products in your Merchant Center account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/productstatuses", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentProductstatusesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProductstatusesListResponse])
                res.productstatuses_list_response = out

        return res

    