
__doc__ = """ SDK Documentation: https://developer.nexmo.com/numbers/overview - Numbers product documentation on the Vonage Developer Portal"""
import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://rest.nexmo.com",
]


class SDK:
    r"""SDK Documentation: https://developer.nexmo.com/numbers/overview - Numbers product documentation on the Vonage Developer Portal"""

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
        
    
    
    
    def buy_a_number(self, request: operations.BuyANumberRequest) -> operations.BuyANumberResponse:
        r"""Buy a number
        Request to purchase a specific inbound number.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/number/buy"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.BuyANumberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Response])
                res.response = out
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Unauthorized])
                res.unauthorized = out
        elif r.status_code == 420:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Response420])
                res.response420 = out

        return res

    
    def cancel_a_number(self, request: operations.CancelANumberRequest) -> operations.CancelANumberResponse:
        r"""Cancel a number
        Cancel your subscription for a specific inbound number.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/number/cancel"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CancelANumberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Response])
                res.response = out
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Unauthorized])
                res.unauthorized = out

        return res

    
    def get_available_numbers(self, request: operations.GetAvailableNumbersRequest) -> operations.GetAvailableNumbersResponse:
        r"""Search available numbers
        Retrieve inbound numbers that are available for the specified country.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/number/search"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAvailableNumbersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AvailableNumbers])
                res.available_numbers = out
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccountUnauthorized])
                res.account_unauthorized = out

        return res

    
    def get_owned_numbers(self, request: operations.GetOwnedNumbersRequest) -> operations.GetOwnedNumbersResponse:
        r"""List the numbers you own
        Retrieve all the inbound numbers associated with your Vonage account.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/account/numbers"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOwnedNumbersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.InboundNumbers])
                res.inbound_numbers = out
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AccountUnauthorized])
                res.account_unauthorized = out

        return res

    
    def update_a_number(self, request: operations.UpdateANumberRequest) -> operations.UpdateANumberResponse:
        r"""Update a number
        Change the behaviour of a number that you own.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/number/update"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateANumberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Response])
                res.response = out
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Unauthorized])
                res.unauthorized = out

        return res

    