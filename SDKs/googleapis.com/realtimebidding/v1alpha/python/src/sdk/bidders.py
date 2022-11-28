import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Bidders:
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

    
    def realtimebidding_bidders_bidding_functions_activate(self, request: operations.RealtimebiddingBiddersBiddingFunctionsActivateRequest) -> operations.RealtimebiddingBiddersBiddingFunctionsActivateResponse:
        r"""Activates an existing bidding function. An activated function is available for invocation for the server-side TURTLEDOVE simulations.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{name}:activate", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RealtimebiddingBiddersBiddingFunctionsActivateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BiddingFunction])
                res.bidding_function = out

        return res

    
    def realtimebidding_bidders_bidding_functions_archive(self, request: operations.RealtimebiddingBiddersBiddingFunctionsArchiveRequest) -> operations.RealtimebiddingBiddersBiddingFunctionsArchiveResponse:
        r"""Archives an existing bidding function. An archived function will not be available for function invocation for the server-side TURTLEDOVE simulations unless it is activated.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{name}:archive", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RealtimebiddingBiddersBiddingFunctionsArchiveResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BiddingFunction])
                res.bidding_function = out

        return res

    
    def realtimebidding_bidders_bidding_functions_create(self, request: operations.RealtimebiddingBiddersBiddingFunctionsCreateRequest) -> operations.RealtimebiddingBiddersBiddingFunctionsCreateResponse:
        r"""Creates a new bidding function.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/biddingFunctions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RealtimebiddingBiddersBiddingFunctionsCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BiddingFunction])
                res.bidding_function = out

        return res

    
    def realtimebidding_bidders_bidding_functions_list(self, request: operations.RealtimebiddingBiddersBiddingFunctionsListRequest) -> operations.RealtimebiddingBiddersBiddingFunctionsListResponse:
        r"""Lists the bidding functions that a bidder currently has registered.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1alpha/{parent}/biddingFunctions", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RealtimebiddingBiddersBiddingFunctionsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListBiddingFunctionsResponse])
                res.list_bidding_functions_response = out

        return res

    