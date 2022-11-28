

import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://papinet.papinet.io",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
    
    
    
    def get_orders(self, request: operations.GetOrdersRequest) -> operations.GetOrdersResponse:
        r"""List `orders`
        Gets a paginated list of all `orders`.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/orders"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrdersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListOfOrders])
                res.list_of_orders = out

        return res

    
    def get_orders_order_id_(self, request: operations.GetOrdersOrderIDRequest) -> operations.GetOrdersOrderIDResponse:
        r"""Get an `order`
        Gets the details of a specific `order`, including a paginated list of all its lines.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/orders/{orderId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrdersOrderIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetOrder])
                res.get_order = out

        return res

    