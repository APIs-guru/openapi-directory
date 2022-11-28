import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Locations:
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

    
    def mybusinessverifications_locations_fetch_verification_options(self, request: operations.MybusinessverificationsLocationsFetchVerificationOptionsRequest) -> operations.MybusinessverificationsLocationsFetchVerificationOptionsResponse:
        r"""Reports all eligible verification options for a location in a specific language.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{location}:fetchVerificationOptions", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessverificationsLocationsFetchVerificationOptionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FetchVerificationOptionsResponse])
                res.fetch_verification_options_response = out

        return res

    
    def mybusinessverifications_locations_get_voice_of_merchant_state(self, request: operations.MybusinessverificationsLocationsGetVoiceOfMerchantStateRequest) -> operations.MybusinessverificationsLocationsGetVoiceOfMerchantStateResponse:
        r"""Gets the VoiceOfMerchant state.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}/VoiceOfMerchantState", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessverificationsLocationsGetVoiceOfMerchantStateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VoiceOfMerchantState])
                res.voice_of_merchant_state = out

        return res

    
    def mybusinessverifications_locations_verifications_complete(self, request: operations.MybusinessverificationsLocationsVerificationsCompleteRequest) -> operations.MybusinessverificationsLocationsVerificationsCompleteResponse:
        r"""Completes a `PENDING` verification. It is only necessary for non `AUTO` verification methods. `AUTO` verification request is instantly `VERIFIED` upon creation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:complete", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessverificationsLocationsVerificationsCompleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CompleteVerificationResponse])
                res.complete_verification_response = out

        return res

    
    def mybusinessverifications_locations_verifications_list(self, request: operations.MybusinessverificationsLocationsVerificationsListRequest) -> operations.MybusinessverificationsLocationsVerificationsListResponse:
        r"""List verifications of a location, ordered by create time.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{parent}/verifications", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessverificationsLocationsVerificationsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListVerificationsResponse])
                res.list_verifications_response = out

        return res

    
    def mybusinessverifications_locations_verify(self, request: operations.MybusinessverificationsLocationsVerifyRequest) -> operations.MybusinessverificationsLocationsVerifyResponse:
        r"""Starts the verification process for a location.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{name}:verify", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessverificationsLocationsVerifyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyLocationResponse])
                res.verify_location_response = out

        return res

    