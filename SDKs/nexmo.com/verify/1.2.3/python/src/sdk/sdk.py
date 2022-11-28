
__doc__ = """ SDK Documentation: https://developer.nexmo.com/verify - More information on the Verify product on our Developer Portal"""
import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils


from .fraud_management import FraudManagement
from .requests import Requests


SERVERS = [
	"https://api.nexmo.com/verify",
]


class SDK:
    r"""SDK Documentation: https://developer.nexmo.com/verify - More information on the Verify product on our Developer Portal"""
    fraud_management: FraudManagement
    requests: Requests

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
        
    
    
    
    def verify_check(self, request: operations.VerifyCheckRequest) -> operations.VerifyCheckResponse:
        r"""Verify Check
        Use Verify check to confirm that the PIN you received from your user matches the one sent by Vonage in your Verify request.
        
        1. Send the verification `code` that your user supplied, with the corresponding `request_id` from the Verify request.
        2. Check the `status` of the response to determine if the code the user supplied matches the one sent by Vonage.
        
        *Note that this endpoint is available by `GET` request as well as `POST`.*
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/check/{format}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VerifyCheckResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.verify_check_200_application_json_one_of = out
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def verify_control(self, request: operations.VerifyControlRequest) -> operations.VerifyControlResponse:
        r"""Verify Control
        Control the progress of your Verify requests. To cancel an existing Verify request, or to trigger the next verification event:
        
        
        1. Send a Verify control request with the appropriate command (`cmd`) for what you want to achieve.
        
        2. Check the `status` in the response.
        
        
        *Note that this endpoint is available by `GET` request as well as `POST`.*
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/control/{format}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VerifyControlResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.verify_control_200_application_json_one_of = out
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    
    def verify_request_with_psd2(self, request: operations.VerifyRequestWithPsd2Request) -> operations.VerifyRequestWithPsd2Response:
        r"""PSD2 (Payment Services Directive 2) Request
        Use Verify request to generate and send a PIN to your user to authorize a payment:
        1. Create a request to send a verification code to your user.
        2. Check the `status` field in the response to ensure that your request was successful (zero is success).
        3. Use the `request_id` field in the response for the Verify check.
        (Please note that XML format is not supported for the Payment Services Directive endpoint at this time.)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/psd2/{format}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.VerifyRequestWithPsd2Response(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.verify_request_with_psd2_200_application_json_one_of = out

        return res

    
    def verify_search(self, request: operations.VerifySearchRequest) -> operations.VerifySearchResponse:
        r"""Verify Search
        Use Verify search to check the status of past or current verification requests:
        
        1. Send a Verify search request containing the `request_id`s of the verification requests you are interested in.
        2. Use the `status` of each verification request in the `checks` array of the response object to determine the outcome.
        
        *Note that this endpoint is available by `POST` request as well as `GET`.*
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/search/{format}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VerifySearchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.verify_search_200_application_json_one_of = out
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content

        return res

    