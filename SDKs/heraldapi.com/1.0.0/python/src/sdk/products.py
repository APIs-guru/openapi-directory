import requests
from typing import Optional
from sdk.models import operations
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

    
    def get_products(self, request: operations.GetProductsRequest) -> operations.GetProductsResponse:
        r"""/products
        ### Get products
        
        Get a list of insurance [products](https://www.heraldapi.com/docs/products).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/products"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetProductsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetProducts200ApplicationJSON])
                res.get_products_200_application_json_object = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetProducts400ApplicationJSON])
                res.get_products_400_application_json_object = out

        return res

    