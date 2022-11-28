

import requests
from typing import Any,List,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://www.interactivebrokers.com/tradingapi/v1",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    _security: shared.Security
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
        
        if self._security is not None:
            self._security_client = utils.configure_security_client(self._client, self._security)
        
    

    def config_security(self, security: shared.Security):
        self._security = security
        self._security_client = utils.configure_security_client(self._client, security)
        
    
    
    
    def delete_accounts_account_orders_customer_order_id_(self, request: operations.DeleteAccountsAccountOrdersCustomerOrderIDRequest) -> operations.DeleteAccountsAccountOrdersCustomerOrderIDResponse:
        r"""Cancel Order
        Cancels the order with the referenced Customer Order ID for the account passed in the URL.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{account}/orders/{CustomerOrderId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAccountsAccountOrdersCustomerOrderIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[operations.DeleteAccountsAccountOrdersCustomerOrderID200ApplicationJSON]])
                res.delete_accounts_account_orders_customer_order_id_200_application_json_objects = out
        elif r.status_code == 202:
            pass
        elif r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 408:
            pass

        return res

    
    def get_accounts(self, request: operations.GetAccountsRequest) -> operations.GetAccountsResponse:
        r"""Brokerage Accounts
        Allows the caller to request a list of accounts associated with the session.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/accounts"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAccounts200ApplicationJSON])
                res.get_accounts_200_application_json_object = out
        elif r.status_code == 202:
            pass
        elif r.status_code == 204:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 408:
            pass

        return res

    
    def get_accounts_account_orders(self, request: operations.GetAccountsAccountOrdersRequest) -> operations.GetAccountsAccountOrdersResponse:
        r"""Open Orders
        Returns a list of orders for the account passed in the URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{account}/orders", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountsAccountOrdersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.OrderState]])
                res.order_states = out
        elif r.status_code == 202:
            pass
        elif r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 408:
            pass

        return res

    
    def get_accounts_account_orders_customer_order_id_(self, request: operations.GetAccountsAccountOrdersCustomerOrderIDRequest) -> operations.GetAccountsAccountOrdersCustomerOrderIDResponse:
        r"""Return specific order info
        Returns the order with the referenced Customer Order ID for the account passed in the URL.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{account}/orders/{CustomerOrderId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountsAccountOrdersCustomerOrderIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.OrderState]])
                res.order_states = out
        elif r.status_code == 202:
            pass
        elif r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 408:
            pass

        return res

    
    def get_accounts_account_positions(self, request: operations.GetAccountsAccountPositionsRequest) -> operations.GetAccountsAccountPositionsResponse:
        r"""Account Positions
        Returns a list of positions for the indicated account. 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{account}/positions", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountsAccountPositionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[operations.GetAccountsAccountPositions200ApplicationJSON]])
                res.get_accounts_account_positions_200_application_json_objects = out
        elif r.status_code == 202:
            pass
        elif r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 408:
            pass

        return res

    
    def get_accounts_account_summary(self, request: operations.GetAccountsAccountSummaryRequest) -> operations.GetAccountsAccountSummaryResponse:
        r"""Account Values Summary
        Returns a list of account and margin balances associated with the account passed in the URL
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{account}/summary", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountsAccountSummaryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAccountsAccountSummary200ApplicationJSON])
                res.get_accounts_account_summary_200_application_json_object = out
        elif r.status_code == 202:
            pass
        elif r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 408:
            pass

        return res

    
    def get_accounts_account_trades(self, request: operations.GetAccountsAccountTradesRequest) -> operations.GetAccountsAccountTradesResponse:
        r"""Returns trades in account
        Returns a list of trades for the account starting at the given 'since' date to the current time (now()). Timezone is UTC. Any request with a future since date or going further than one week will result in an HTTP 400 bad request response. Calling /trades without since will return all trades for the past 24 hours.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{account}/trades", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("GET", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountsAccountTradesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[operations.GetAccountsAccountTrades200ApplicationJSON]])
                res.get_accounts_account_trades_200_application_json_objects = out
        elif r.status_code == 202:
            pass
        elif r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 408:
            pass

        return res

    
    def get_marketdata_exchange_components(self) -> operations.GetMarketdataExchangeComponentsResponse:
        r"""Exchange Components
        This endpoint provides a bit mapping for the bid/ask/last 'market' values in the snapshot response. 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/marketdata/exchange_components"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMarketdataExchangeComponentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[operations.GetMarketdataExchangeComponents200ApplicationJSON]])
                res.get_marketdata_exchange_components_200_application_json_objects = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 408:
            pass

        return res

    
    def get_marketdata_snapshot(self, request: operations.GetMarketdataSnapshotRequest) -> operations.GetMarketdataSnapshotResponse:
        r"""Market Data Snapshot
        This endpoint allows the consumer to request a market data snapshot for one or more trading products. 
        Consumers need to provide unique identifiers (conids) for the products in the IB product database (retrievable using the /secdef endpoint). The 'market' values are integers whose bits indicate the exchange(s) making up the quote. 
        
        The mapping of bit to exchange is obtained from the marketdata/exchange_component endpoint. For example, if a bid has a 'market' value of 5 and the exchange_component result has the map 
        0 => NYSE, 1 => ISLAND, 2 => ARCA then the exchanges contributing to the bid size are NYSE and ARCA. 
        
        Similarly, if market=2, then only ISLAND is contributing.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/marketdata/snapshot"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("GET", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetMarketdataSnapshotResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[operations.GetMarketdataSnapshot200ApplicationJSON]])
                res.get_marketdata_snapshot_200_application_json_objects = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 408:
            pass

        return res

    
    def get_secdef(self, request: operations.GetSecdefRequest) -> operations.GetSecdefResponse:
        r"""Get security definition
        Fields that compose security definition. Allowed combinations,
        (1) type and symbol and currency, or
        (2) type, symbol, exchange, and currency, or
        (3) conid
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/secdef"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("GET", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSecdefResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[operations.GetSecdef200ApplicationJSON]])
                res.get_secdef_200_application_json_objects = out
        elif r.status_code == 202:
            pass
        elif r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 408:
            pass

        return res

    
    def post_accounts_account_order_impact(self, request: operations.PostAccountsAccountOrderImpactRequest) -> operations.PostAccountsAccountOrderImpactResponse:
        r"""Return margin impact info
        This endpoint allows the consumer to check the impact that an order would have on the account, including margin, NLV and estimated commission costs.
        To specify the contract, you provide a value for the ContractId field, OR Ticker/ListingExchange/InstrumentType=STK for stocks OR Ticker/Currency/InstrumentType=CASH for FX.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{account}/order_impact", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAccountsAccountOrderImpactResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostAccountsAccountOrderImpact200ApplicationJSON])
                res.post_accounts_account_order_impact_200_application_json_object = out
        elif r.status_code == 202:
            pass
        elif r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 408:
            pass

        return res

    
    def post_accounts_account_orders(self, request: operations.PostAccountsAccountOrdersRequest) -> operations.PostAccountsAccountOrdersResponse:
        r"""Place Order
        Places order
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{account}/orders", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAccountsAccountOrdersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[shared.OrderState]])
                res.order_states = out
        elif r.status_code == 202:
            pass
        elif r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 408:
            pass

        return res

    
    def post_oauth_access_token(self, request: operations.PostOauthAccessTokenRequest) -> operations.PostOauthAccessTokenResponse:
        r"""Obtain a access token
        Obtain an access token using the request token and the verification code you received after the user provided authorization. See section 6.3 of the OAuth v1.0a specification for more details. 
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/oauth/access_token"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostOauthAccessTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostOauthAccessToken200ApplicationJSON])
                res.post_oauth_access_token_200_application_json_object = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 408:
            pass

        return res

    
    def post_oauth_live_session_token(self, request: operations.PostOauthLiveSessionTokenRequest) -> operations.PostOauthLiveSessionTokenResponse:
        r"""Obtain a live session token
        In order to access protected IB resources, a live session token is required. This endpoint allows consumers to obtain a live session token to access these resources using an OAuth access token and the Diffie-Hellman prime and generator supplied during the registration process.
        Note this is an additional IB-specific step, and not part of the OAuth v1.0a specification. Please refer to the \"OAuth at Interactive Brokers\" document for more details.  https://www.interactivebrokers.com/webtradingapi/oauth.pdf
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/oauth/live_session_token"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostOauthLiveSessionTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostOauthLiveSessionToken200ApplicationJSON])
                res.post_oauth_live_session_token_200_application_json_object = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 408:
            pass

        return res

    
    def post_oauth_request_token(self, request: operations.PostOauthRequestTokenRequest) -> operations.PostOauthRequestTokenResponse:
        r"""Obtain a request token
        Obtain a request token. See section 6.1 of the OAuth v1.0a specification for more information. http://oauth.net/core/1.0a/#auth_step1
        
        Note we do not return an oauth_token_secret in the response as we are using RSA signatures rather than PLAINTEXT authentication. 
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/oauth/request_token"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostOauthRequestTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostOauthRequestToken200ApplicationJSON])
                res.post_oauth_request_token_200_application_json_object = out
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 408:
            pass

        return res

    
    def put_accounts_account_orders_customer_order_id_(self, request: operations.PutAccountsAccountOrdersCustomerOrderIDRequest) -> operations.PutAccountsAccountOrdersCustomerOrderIDResponse:
        r"""Modify Order
        Allows the caller to modify the order with the referenced Customer Order ID specified in the URL. A separate Customer Order ID must be provided in the request body for the modification.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{account}/orders/{CustomerOrderId}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutAccountsAccountOrdersCustomerOrderIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[List[operations.PutAccountsAccountOrdersCustomerOrderID200ApplicationJSON]])
                res.put_accounts_account_orders_customer_order_id_200_application_json_objects = out
        elif r.status_code == 202:
            pass
        elif r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 401:
            pass
        elif r.status_code == 403:
            pass
        elif r.status_code == 408:
            pass

        return res

    