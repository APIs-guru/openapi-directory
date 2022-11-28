import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class UserAuth:
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

    
    def post_v0_5_users_auth_notify(self, request: operations.PostV05UsersAuthNotifyRequest) -> operations.PostV05UsersAuthNotifyResponse:
        r"""notification API in case of DIRECT mode of authentication by the CM
        This API is called by CM to confirm authentication of users. The transactionId returned is same as that passed in /auth/on-init. The \"auth.status\" conveys whether the request was GRANTED or DENIED.
        
          1. **auth.accessToken** - is specific to the purpose mentioned in the /auth/init. This token needs to be used for initiating the intended action. For example for HIP initiated linking of care-contexts
          2. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both.
          3. The payload is conditional to the purpose of auth. If purpose specified in /auth/init is KYC or KYC_AND_LINK, then patient details are passed. **auth.accessToken** is passed only if the purpose is LINK or KYC_AND_LINK.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v0.5/users/auth/notify"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostV05UsersAuthNotifyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def post_v0_5_users_auth_on_confirm(self, request: operations.PostV05UsersAuthOnConfirmRequest) -> operations.PostV05UsersAuthOnConfirmResponse:
        r"""callback API for /auth/confirm (in case of MEDIATED auth) to confirm user authentication or not
        This API is called by CM to confirm authentication of users.
        
          1. **auth.accessToken** - is specific to the purpose mentioned in the /auth/init. This token needs to be used for initiating the intended action. For example for HIP initiated linking of care-contexts
          2. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both.     
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v0.5/users/auth/on-confirm"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostV05UsersAuthOnConfirmResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def post_v0_5_users_auth_on_fetch_modes(self, request: operations.PostV05UsersAuthOnFetchModesRequest) -> operations.PostV05UsersAuthOnFetchModesResponse:
        r"""Identification result for a consent-manager user-id
        If a patient is found then **auth** attribute contains the supported modes for the specified purpose. 
        Otherwise, error is raised for invalid requests or for non-existent id.
        Note in addition to the \"Authorization\" header, one of the following headers must be specified
        1. **X-HIU-ID** if the requester is HIU (identified from /auth/fetch-modes requester.id)
        2. **X-HIP-ID** if the requester is HIP (identified from /auth/fetch-modes requester.id)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v0.5/users/auth/on-fetch-modes"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostV05UsersAuthOnFetchModesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def post_v0_5_users_auth_on_init(self, request: operations.PostV05UsersAuthOnInitRequest) -> operations.PostV05UsersAuthOnInitResponse:
        r"""Response to user authentication initialization from HIP
        If the patient's id is valid, CM will return a transactionId as initialization of user auth. If the request is valid, then 'auth.mode' will convey how the authentication should be done. The authentication can be *mediated* or *direct*. For mediated authentication modes, HIP or HIU is epected to send over relevant code (OTP/token) or demographic info via subsequent API call to /auth/confirm. for direct authentication case, CM will notify requester through/users/auth/notify API. 
        
          1. **auth.mode** conveys whats the mode of authentication is, and what is expected from HIP/HIU in the subsequent /auth/confirm API call. Possible values 
              1. MOBILE_OTP - auth via OTP to registered mobile. Mediated. 
              2. AADHAAR_OTP - auth initiated with Aadhaar with OTP. Mediated. 
              3. DEMOGRAPHICS - auth initiated with demographic verification
              4. DIRECT - for authentication directly with the patient. e.g. Mobile App, SMS. In this case, the HIP/HIU is not expected to call subsequent /auth/confirm call. CM will do direct authentication with the User (e.g. Mobile App, SMS etc) and will notify requester
          2. **meta.expiry** conveys the expiry time of the token and the authentication session
          3. **NOTE**, only one of **X-HIP-ID** or **X-HIU-ID** will be sent as part of header, not both. 
          4. **NOTE**, only KYC purpose is applicable for HIU
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
          
        The error section in the body, represents the potential errors that may have occurred. Possible reasons:
          1. Patient id is invalid
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v0.5/users/auth/on-init"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostV05UsersAuthOnInitResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            pass
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 401:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 500:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ErrorResponse])
                res.error_response = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    