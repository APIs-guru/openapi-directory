import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Buyongoogleprograms:
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

    
    def content_buyongoogleprograms_activate(self, request: operations.ContentBuyongoogleprogramsActivateRequest) -> operations.ContentBuyongoogleprogramsActivateResponse:
        r"""Reactivates the BoG program in your Merchant Center account. Moves the program to the active state when allowed, for example, when paused. This method is only available to selected merchants.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/buyongoogleprograms/{regionCode}/activate", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentBuyongoogleprogramsActivateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def content_buyongoogleprograms_get(self, request: operations.ContentBuyongoogleprogramsGetRequest) -> operations.ContentBuyongoogleprogramsGetResponse:
        r"""Retrieves a status of the BoG program for your Merchant Center account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/buyongoogleprograms/{regionCode}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentBuyongoogleprogramsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BuyOnGoogleProgramStatus])
                res.buy_on_google_program_status = out

        return res

    
    def content_buyongoogleprograms_onboard(self, request: operations.ContentBuyongoogleprogramsOnboardRequest) -> operations.ContentBuyongoogleprogramsOnboardResponse:
        r"""Onboards the BoG program in your Merchant Center account. By using this method, you agree to the [Terms of Service](https://merchants.google.com/mc/termsofservice/transactions/US/latest). Calling this method is only possible if the authenticated account is the same as the merchant id in the request. Calling this method multiple times will only accept Terms of Service if the latest version is not currently signed.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/buyongoogleprograms/{regionCode}/onboard", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentBuyongoogleprogramsOnboardResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def content_buyongoogleprograms_patch(self, request: operations.ContentBuyongoogleprogramsPatchRequest) -> operations.ContentBuyongoogleprogramsPatchResponse:
        r"""Updates the status of the BoG program for your Merchant Center account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/buyongoogleprograms/{regionCode}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentBuyongoogleprogramsPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.BuyOnGoogleProgramStatus])
                res.buy_on_google_program_status = out

        return res

    
    def content_buyongoogleprograms_pause(self, request: operations.ContentBuyongoogleprogramsPauseRequest) -> operations.ContentBuyongoogleprogramsPauseResponse:
        r"""Pauses the BoG program in your Merchant Center account. This method is only available to selected merchants.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/buyongoogleprograms/{regionCode}/pause", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentBuyongoogleprogramsPauseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    
    def content_buyongoogleprograms_requestreview(self, request: operations.ContentBuyongoogleprogramsRequestreviewRequest) -> operations.ContentBuyongoogleprogramsRequestreviewResponse:
        r"""Requests review and then activates the BoG program in your Merchant Center account for the first time. Moves the program to the REVIEW_PENDING state. This method is only available to selected merchants.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{merchantId}/buyongoogleprograms/{regionCode}/requestreview", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ContentBuyongoogleprogramsRequestreviewResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass

        return res

    