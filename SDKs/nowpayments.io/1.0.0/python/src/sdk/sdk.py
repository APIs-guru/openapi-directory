

import requests
from typing import Optional
from sdk.models import operations
from . import utils




SERVERS = [
	"https://api.nowpayments.io",
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
        
    
    
    
    def three_get_estimated_price(self, request: operations.ThreeGetEstimatedPriceRequest) -> operations.ThreeGetEstimatedPriceResponse:
        r"""3. Get estimated price
        This is a method for calculating the approximate price in cryptocurrency for a given value in Fiat currency. You will need to provide the initial cost in the Fiat currency (amount, currency_from) and the necessary cryptocurrency (currency_to)
        Currently following fiat currencies are available: usd, eur, nzd, brl, gbp.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/estimate"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
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
        r"""6. Get the minimum payment amount
        Get the minimum payment amount for a specific pair.
        
        You can provide both currencies in the pair or just currency_from, and we will calculate the minimum payment amount for currency_from and currency which you have specified as the outcome in the Store Settings.
        
        In the case of several outcome wallets we will calculate the minimum amount in the same way we route your payment to a specific wallet.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/min-amount"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
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
        r"""7. Get list of payments
        Returns the entire list of all transactions, created with certain API key.
        The list of optional parameters:
        - limit - number of records in one page. (possible values: from 1 to 500)
        - page - the page number you want to get (possible values: from 0 to **page count - 1**)
        - sortBy - sort the received list by a paramenter. Set to **created_at** by default (possible values: payment_id, payment_status, pay_address, price_amount, price_currency, pay_amount, actually_paid, pay_currency, order_id, order_description, purchase_id, outcome_amount, outcome_currency)
        - orderBy - display the list in ascending or descending order. Set to **asc** by default (possible values: asc, desc)
        - dateFrom - select the displayed period start date (date format: YYYY-MM-DD or yy-MM-ddTHH:mm:ss.SSSZ).
        - dateTo - select the displayed period end date (date format: YYYY-MM-DD or yy-MM-ddTHH:mm:ss.SSSZ).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/payment/"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SevenGetListOfPaymentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SevenGetListOfPayments200ApplicationJSON])
                res.seven_get_list_of_payments_200_application_json_object = out

        return res

    