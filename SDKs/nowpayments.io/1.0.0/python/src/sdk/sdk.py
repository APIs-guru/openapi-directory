import warnings
import requests
from typing import List,Optional
from sdk.models import operations
from . import utils


SERVERS = [
	"https://api.nowpayments.io",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def three_get_estimated_price(self, request: operations.ThreeGetEstimatedPriceRequest) -> operations.ThreeGetEstimatedPriceResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/estimate"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ThreeGetEstimatedPriceResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ThreeGetEstimatedPrice200ApplicationJSON])
                res.three_get_estimated_price_200_application_json_object = out

        return res

    
    
    def six_get_the_minimum_payment_amount(self, request: operations.SixGetTheMinimumPaymentAmountRequest) -> operations.SixGetTheMinimumPaymentAmountResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/min-amount"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SixGetTheMinimumPaymentAmountResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SixGetTheMinimumPaymentAmount200ApplicationJSON])
                res.six_get_the_minimum_payment_amount_200_application_json_object = out

        return res

    
    
    def seven_get_list_of_payments(self, request: operations.SevenGetListOfPaymentsRequest) -> operations.SevenGetListOfPaymentsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/payment/"
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SevenGetListOfPaymentsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SevenGetListOfPayments200ApplicationJSON])
                res.seven_get_list_of_payments_200_application_json_object = out

        return res

    