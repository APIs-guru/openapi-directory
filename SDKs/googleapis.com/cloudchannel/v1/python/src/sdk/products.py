import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Products:
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

    
    def cloudchannel_products_list(self, request: operations.CloudchannelProductsListRequest) -> operations.CloudchannelProductsListResponse:
        r"""Lists the Products the reseller is authorized to sell. Possible error codes: * INVALID_ARGUMENT: Required request parameters are missing or invalid.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/products"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudchannelProductsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudChannelV1ListProductsResponse])
                res.google_cloud_channel_v1_list_products_response = out

        return res

    
    def cloudchannel_products_skus_list(self, request: operations.CloudchannelProductsSkusListRequest) -> operations.CloudchannelProductsSkusListResponse:
        r"""Lists the SKUs for a product the reseller is authorized to sell. Possible error codes: * INVALID_ARGUMENT: Required request parameters are missing or invalid.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/skus", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.CloudchannelProductsSkusListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudChannelV1ListSkusResponse])
                res.google_cloud_channel_v1_list_skus_response = out

        return res

    