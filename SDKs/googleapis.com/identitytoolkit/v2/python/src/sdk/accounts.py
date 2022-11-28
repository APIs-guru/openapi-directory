import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Accounts:
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

    
    def identitytoolkit_accounts_mfa_enrollment_finalize(self, request: operations.IdentitytoolkitAccountsMfaEnrollmentFinalizeRequest) -> operations.IdentitytoolkitAccountsMfaEnrollmentFinalizeResponse:
        r"""Finishes enrolling a second factor for the user.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/accounts/mfaEnrollment:finalize"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitAccountsMfaEnrollmentFinalizeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIdentitytoolkitV2FinalizeMfaEnrollmentResponse])
                res.google_cloud_identitytoolkit_v2_finalize_mfa_enrollment_response = out

        return res

    
    def identitytoolkit_accounts_mfa_enrollment_start(self, request: operations.IdentitytoolkitAccountsMfaEnrollmentStartRequest) -> operations.IdentitytoolkitAccountsMfaEnrollmentStartResponse:
        r"""Step one of the MFA enrollment process. In SMS case, this sends an SMS verification code to the user.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/accounts/mfaEnrollment:start"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitAccountsMfaEnrollmentStartResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIdentitytoolkitV2StartMfaEnrollmentResponse])
                res.google_cloud_identitytoolkit_v2_start_mfa_enrollment_response = out

        return res

    
    def identitytoolkit_accounts_mfa_enrollment_withdraw(self, request: operations.IdentitytoolkitAccountsMfaEnrollmentWithdrawRequest) -> operations.IdentitytoolkitAccountsMfaEnrollmentWithdrawResponse:
        r"""Revokes one second factor from the enrolled second factors for an account.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/accounts/mfaEnrollment:withdraw"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitAccountsMfaEnrollmentWithdrawResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIdentitytoolkitV2WithdrawMfaResponse])
                res.google_cloud_identitytoolkit_v2_withdraw_mfa_response = out

        return res

    
    def identitytoolkit_accounts_mfa_sign_in_finalize(self, request: operations.IdentitytoolkitAccountsMfaSignInFinalizeRequest) -> operations.IdentitytoolkitAccountsMfaSignInFinalizeResponse:
        r"""Verifies the MFA challenge and performs sign-in
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/accounts/mfaSignIn:finalize"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitAccountsMfaSignInFinalizeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIdentitytoolkitV2FinalizeMfaSignInResponse])
                res.google_cloud_identitytoolkit_v2_finalize_mfa_sign_in_response = out

        return res

    
    def identitytoolkit_accounts_mfa_sign_in_start(self, request: operations.IdentitytoolkitAccountsMfaSignInStartRequest) -> operations.IdentitytoolkitAccountsMfaSignInStartResponse:
        r"""Sends the MFA challenge
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v2/accounts/mfaSignIn:start"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitAccountsMfaSignInStartResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleCloudIdentitytoolkitV2StartMfaSignInResponse])
                res.google_cloud_identitytoolkit_v2_start_mfa_sign_in_response = out

        return res

    