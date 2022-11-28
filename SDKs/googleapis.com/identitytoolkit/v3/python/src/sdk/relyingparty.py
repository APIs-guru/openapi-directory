import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Relyingparty:
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

    
    def identitytoolkit_relyingparty_create_auth_uri(self, request: operations.IdentitytoolkitRelyingpartyCreateAuthURIRequest) -> operations.IdentitytoolkitRelyingpartyCreateAuthURIResponse:
        r"""Creates the URI used by the IdP to authenticate the user.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/createAuthUri"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitRelyingpartyCreateAuthURIResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CreateAuthURIResponse])
                res.create_auth_uri_response = out

        return res

    
    def identitytoolkit_relyingparty_delete_account(self, request: operations.IdentitytoolkitRelyingpartyDeleteAccountRequest) -> operations.IdentitytoolkitRelyingpartyDeleteAccountResponse:
        r"""Delete user account.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/deleteAccount"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitRelyingpartyDeleteAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DeleteAccountResponse])
                res.delete_account_response = out

        return res

    
    def identitytoolkit_relyingparty_download_account(self, request: operations.IdentitytoolkitRelyingpartyDownloadAccountRequest) -> operations.IdentitytoolkitRelyingpartyDownloadAccountResponse:
        r"""Batch download user accounts.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/downloadAccount"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitRelyingpartyDownloadAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.DownloadAccountResponse])
                res.download_account_response = out

        return res

    
    def identitytoolkit_relyingparty_email_link_signin(self, request: operations.IdentitytoolkitRelyingpartyEmailLinkSigninRequest) -> operations.IdentitytoolkitRelyingpartyEmailLinkSigninResponse:
        r"""Reset password for a user.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/emailLinkSignin"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitRelyingpartyEmailLinkSigninResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EmailLinkSigninResponse])
                res.email_link_signin_response = out

        return res

    
    def identitytoolkit_relyingparty_get_account_info(self, request: operations.IdentitytoolkitRelyingpartyGetAccountInfoRequest) -> operations.IdentitytoolkitRelyingpartyGetAccountInfoResponse:
        r"""Returns the account info.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getAccountInfo"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitRelyingpartyGetAccountInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetAccountInfoResponse])
                res.get_account_info_response = out

        return res

    
    def identitytoolkit_relyingparty_get_oob_confirmation_code(self, request: operations.IdentitytoolkitRelyingpartyGetOobConfirmationCodeRequest) -> operations.IdentitytoolkitRelyingpartyGetOobConfirmationCodeResponse:
        r"""Get a code for user action confirmation.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getOobConfirmationCode"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitRelyingpartyGetOobConfirmationCodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetOobConfirmationCodeResponse])
                res.get_oob_confirmation_code_response = out

        return res

    
    def identitytoolkit_relyingparty_get_project_config(self, request: operations.IdentitytoolkitRelyingpartyGetProjectConfigRequest) -> operations.IdentitytoolkitRelyingpartyGetProjectConfigResponse:
        r"""Get project configuration.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getProjectConfig"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitRelyingpartyGetProjectConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IdentitytoolkitRelyingpartyGetProjectConfigResponse])
                res.identitytoolkit_relyingparty_get_project_config_response = out

        return res

    
    def identitytoolkit_relyingparty_get_public_keys(self, request: operations.IdentitytoolkitRelyingpartyGetPublicKeysRequest) -> operations.IdentitytoolkitRelyingpartyGetPublicKeysResponse:
        r"""Get token signing public key.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/publicKeys"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitRelyingpartyGetPublicKeysResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, str]])
                res.identitytoolkit_relyingparty_get_public_keys_response = out

        return res

    
    def identitytoolkit_relyingparty_get_recaptcha_param(self, request: operations.IdentitytoolkitRelyingpartyGetRecaptchaParamRequest) -> operations.IdentitytoolkitRelyingpartyGetRecaptchaParamResponse:
        r"""Get recaptcha secure param.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/getRecaptchaParam"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitRelyingpartyGetRecaptchaParamResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetRecaptchaParamResponse])
                res.get_recaptcha_param_response = out

        return res

    
    def identitytoolkit_relyingparty_reset_password(self, request: operations.IdentitytoolkitRelyingpartyResetPasswordRequest) -> operations.IdentitytoolkitRelyingpartyResetPasswordResponse:
        r"""Reset password for a user.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/resetPassword"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitRelyingpartyResetPasswordResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ResetPasswordResponse])
                res.reset_password_response = out

        return res

    
    def identitytoolkit_relyingparty_send_verification_code(self, request: operations.IdentitytoolkitRelyingpartySendVerificationCodeRequest) -> operations.IdentitytoolkitRelyingpartySendVerificationCodeResponse:
        r"""Send SMS verification code.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/sendVerificationCode"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitRelyingpartySendVerificationCodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IdentitytoolkitRelyingpartySendVerificationCodeResponse])
                res.identitytoolkit_relyingparty_send_verification_code_response = out

        return res

    
    def identitytoolkit_relyingparty_set_account_info(self, request: operations.IdentitytoolkitRelyingpartySetAccountInfoRequest) -> operations.IdentitytoolkitRelyingpartySetAccountInfoResponse:
        r"""Set account info for a user.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setAccountInfo"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitRelyingpartySetAccountInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SetAccountInfoResponse])
                res.set_account_info_response = out

        return res

    
    def identitytoolkit_relyingparty_set_project_config(self, request: operations.IdentitytoolkitRelyingpartySetProjectConfigRequest) -> operations.IdentitytoolkitRelyingpartySetProjectConfigResponse:
        r"""Set project configuration.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/setProjectConfig"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitRelyingpartySetProjectConfigResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IdentitytoolkitRelyingpartySetProjectConfigResponse])
                res.identitytoolkit_relyingparty_set_project_config_response = out

        return res

    
    def identitytoolkit_relyingparty_sign_out_user(self, request: operations.IdentitytoolkitRelyingpartySignOutUserRequest) -> operations.IdentitytoolkitRelyingpartySignOutUserResponse:
        r"""Sign out user.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/signOutUser"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitRelyingpartySignOutUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IdentitytoolkitRelyingpartySignOutUserResponse])
                res.identitytoolkit_relyingparty_sign_out_user_response = out

        return res

    
    def identitytoolkit_relyingparty_signup_new_user(self, request: operations.IdentitytoolkitRelyingpartySignupNewUserRequest) -> operations.IdentitytoolkitRelyingpartySignupNewUserResponse:
        r"""Signup new user.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/signupNewUser"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitRelyingpartySignupNewUserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SignupNewUserResponse])
                res.signup_new_user_response = out

        return res

    
    def identitytoolkit_relyingparty_upload_account(self, request: operations.IdentitytoolkitRelyingpartyUploadAccountRequest) -> operations.IdentitytoolkitRelyingpartyUploadAccountResponse:
        r"""Batch upload existing user accounts.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/uploadAccount"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitRelyingpartyUploadAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UploadAccountResponse])
                res.upload_account_response = out

        return res

    
    def identitytoolkit_relyingparty_verify_assertion(self, request: operations.IdentitytoolkitRelyingpartyVerifyAssertionRequest) -> operations.IdentitytoolkitRelyingpartyVerifyAssertionResponse:
        r"""Verifies the assertion returned by the IdP.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/verifyAssertion"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitRelyingpartyVerifyAssertionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyAssertionResponse])
                res.verify_assertion_response = out

        return res

    
    def identitytoolkit_relyingparty_verify_custom_token(self, request: operations.IdentitytoolkitRelyingpartyVerifyCustomTokenRequest) -> operations.IdentitytoolkitRelyingpartyVerifyCustomTokenResponse:
        r"""Verifies the developer asserted ID token.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/verifyCustomToken"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitRelyingpartyVerifyCustomTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyCustomTokenResponse])
                res.verify_custom_token_response = out

        return res

    
    def identitytoolkit_relyingparty_verify_password(self, request: operations.IdentitytoolkitRelyingpartyVerifyPasswordRequest) -> operations.IdentitytoolkitRelyingpartyVerifyPasswordResponse:
        r"""Verifies the user entered password.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/verifyPassword"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitRelyingpartyVerifyPasswordResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyPasswordResponse])
                res.verify_password_response = out

        return res

    
    def identitytoolkit_relyingparty_verify_phone_number(self, request: operations.IdentitytoolkitRelyingpartyVerifyPhoneNumberRequest) -> operations.IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse:
        r"""Verifies ownership of a phone number and creates/updates the user account accordingly.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/verifyPhoneNumber"
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IdentitytoolkitRelyingpartyVerifyPhoneNumberResponse])
                res.identitytoolkit_relyingparty_verify_phone_number_response = out

        return res

    