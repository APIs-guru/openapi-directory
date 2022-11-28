import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Projects:
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

    
    def firebaseappcheck_projects_apps_app_attest_config_batch_get(self, request: operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetRequest) -> operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetResponse:
        r"""Atomically gets the AppAttestConfigs for the specified list of apps.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{parent}/apps/-/appAttestConfig:batchGet", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFirebaseAppcheckV1betaBatchGetAppAttestConfigsResponse])
                res.google_firebase_appcheck_v1beta_batch_get_app_attest_configs_response = out

        return res

    
    def firebaseappcheck_projects_apps_debug_tokens_create(self, request: operations.FirebaseappcheckProjectsAppsDebugTokensCreateRequest) -> operations.FirebaseappcheckProjectsAppsDebugTokensCreateResponse:
        r"""Creates a new DebugToken for the specified app. For security reasons, after the creation operation completes, the `token` field cannot be updated or retrieved, but you can revoke the debug token using DeleteDebugToken. Each app can have a maximum of 20 debug tokens.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{parent}/debugTokens", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebaseappcheckProjectsAppsDebugTokensCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFirebaseAppcheckV1betaDebugToken])
                res.google_firebase_appcheck_v1beta_debug_token = out

        return res

    
    def firebaseappcheck_projects_apps_debug_tokens_delete(self, request: operations.FirebaseappcheckProjectsAppsDebugTokensDeleteRequest) -> operations.FirebaseappcheckProjectsAppsDebugTokensDeleteResponse:
        r"""Deletes the specified DebugToken. A deleted debug token cannot be used to exchange for an App Check token. Use this method when you suspect the secret `token` has been compromised or when you no longer need the debug token.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebaseappcheckProjectsAppsDebugTokensDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    def firebaseappcheck_projects_apps_debug_tokens_list(self, request: operations.FirebaseappcheckProjectsAppsDebugTokensListRequest) -> operations.FirebaseappcheckProjectsAppsDebugTokensListResponse:
        r"""Lists all DebugTokens for the specified app. For security reasons, the `token` field is never populated in the response.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{parent}/debugTokens", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebaseappcheckProjectsAppsDebugTokensListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFirebaseAppcheckV1betaListDebugTokensResponse])
                res.google_firebase_appcheck_v1beta_list_debug_tokens_response = out

        return res

    
    def firebaseappcheck_projects_apps_device_check_config_batch_get(self, request: operations.FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetRequest) -> operations.FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetResponse:
        r"""Atomically gets the DeviceCheckConfigs for the specified list of apps. For security reasons, the `private_key` field is never populated in the response.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{parent}/apps/-/deviceCheckConfig:batchGet", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFirebaseAppcheckV1betaBatchGetDeviceCheckConfigsResponse])
                res.google_firebase_appcheck_v1beta_batch_get_device_check_configs_response = out

        return res

    
    def firebaseappcheck_projects_apps_exchange_app_attest_assertion(self, request: operations.FirebaseappcheckProjectsAppsExchangeAppAttestAssertionRequest) -> operations.FirebaseappcheckProjectsAppsExchangeAppAttestAssertionResponse:
        r"""Accepts an App Attest assertion and an artifact previously obtained from ExchangeAppAttestAttestation and verifies those with Apple. If valid, returns an AppCheckToken.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{app}:exchangeAppAttestAssertion", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebaseappcheckProjectsAppsExchangeAppAttestAssertionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFirebaseAppcheckV1betaAppCheckToken])
                res.google_firebase_appcheck_v1beta_app_check_token = out

        return res

    
    def firebaseappcheck_projects_apps_exchange_app_attest_attestation(self, request: operations.FirebaseappcheckProjectsAppsExchangeAppAttestAttestationRequest) -> operations.FirebaseappcheckProjectsAppsExchangeAppAttestAttestationResponse:
        r"""Accepts an App Attest CBOR attestation and verifies it with Apple using your preconfigured team and bundle IDs. If valid, returns an attestation artifact that can later be exchanged for an AppCheckToken using ExchangeAppAttestAssertion. For convenience and performance, this method's response object will also contain an AppCheckToken (if the verification is successful).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{app}:exchangeAppAttestAttestation", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebaseappcheckProjectsAppsExchangeAppAttestAttestationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationResponse])
                res.google_firebase_appcheck_v1beta_exchange_app_attest_attestation_response = out

        return res

    
    def firebaseappcheck_projects_apps_exchange_custom_token(self, request: operations.FirebaseappcheckProjectsAppsExchangeCustomTokenRequest) -> operations.FirebaseappcheckProjectsAppsExchangeCustomTokenResponse:
        r"""Validates a custom token signed using your project's Admin SDK service account credentials. If valid, returns an AppCheckToken.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{app}:exchangeCustomToken", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebaseappcheckProjectsAppsExchangeCustomTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFirebaseAppcheckV1betaAppCheckToken])
                res.google_firebase_appcheck_v1beta_app_check_token = out

        return res

    
    def firebaseappcheck_projects_apps_exchange_debug_token(self, request: operations.FirebaseappcheckProjectsAppsExchangeDebugTokenRequest) -> operations.FirebaseappcheckProjectsAppsExchangeDebugTokenResponse:
        r"""Validates a debug token secret that you have previously created using CreateDebugToken. If valid, returns an AppCheckToken. Note that a restrictive quota is enforced on this method to prevent accidental exposure of the app to abuse.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{app}:exchangeDebugToken", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebaseappcheckProjectsAppsExchangeDebugTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFirebaseAppcheckV1betaAppCheckToken])
                res.google_firebase_appcheck_v1beta_app_check_token = out

        return res

    
    def firebaseappcheck_projects_apps_exchange_device_check_token(self, request: operations.FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenRequest) -> operations.FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenResponse:
        r"""Accepts a [`device_token`](https://developer.apple.com/documentation/devicecheck/dcdevice) issued by DeviceCheck, and attempts to validate it with Apple. If valid, returns an AppCheckToken.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{app}:exchangeDeviceCheckToken", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFirebaseAppcheckV1betaAppCheckToken])
                res.google_firebase_appcheck_v1beta_app_check_token = out

        return res

    
    def firebaseappcheck_projects_apps_exchange_play_integrity_token(self, request: operations.FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenRequest) -> operations.FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenResponse:
        r"""Validates an [integrity verdict response token from Play Integrity](https://developer.android.com/google/play/integrity/verdict#decrypt-verify). If valid, returns an AppCheckToken.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{app}:exchangePlayIntegrityToken", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFirebaseAppcheckV1betaAppCheckToken])
                res.google_firebase_appcheck_v1beta_app_check_token = out

        return res

    
    def firebaseappcheck_projects_apps_exchange_recaptcha_enterprise_token(self, request: operations.FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenRequest) -> operations.FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenResponse:
        r"""Validates a [reCAPTCHA Enterprise response token](https://cloud.google.com/recaptcha-enterprise/docs/create-assessment#retrieve_token). If valid, returns an App Check token AppCheckToken.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{app}:exchangeRecaptchaEnterpriseToken", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFirebaseAppcheckV1betaAppCheckToken])
                res.google_firebase_appcheck_v1beta_app_check_token = out

        return res

    
    def firebaseappcheck_projects_apps_exchange_recaptcha_token(self, request: operations.FirebaseappcheckProjectsAppsExchangeRecaptchaTokenRequest) -> operations.FirebaseappcheckProjectsAppsExchangeRecaptchaTokenResponse:
        r"""Validates a [reCAPTCHA v3 response token](https://developers.google.com/recaptcha/docs/v3). If valid, returns an AppCheckToken.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{app}:exchangeRecaptchaToken", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebaseappcheckProjectsAppsExchangeRecaptchaTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFirebaseAppcheckV1betaAppCheckToken])
                res.google_firebase_appcheck_v1beta_app_check_token = out

        return res

    
    def firebaseappcheck_projects_apps_exchange_recaptcha_v3_token(self, request: operations.FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenRequest) -> operations.FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenResponse:
        r"""Validates a [reCAPTCHA v3 response token](https://developers.google.com/recaptcha/docs/v3). If valid, returns an AppCheckToken.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{app}:exchangeRecaptchaV3Token", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFirebaseAppcheckV1betaAppCheckToken])
                res.google_firebase_appcheck_v1beta_app_check_token = out

        return res

    
    def firebaseappcheck_projects_apps_exchange_safety_net_token(self, request: operations.FirebaseappcheckProjectsAppsExchangeSafetyNetTokenRequest) -> operations.FirebaseappcheckProjectsAppsExchangeSafetyNetTokenResponse:
        r"""Validates a [SafetyNet token](https://developer.android.com/training/safetynet/attestation#request-attestation-step). If valid, returns an AppCheckToken.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{app}:exchangeSafetyNetToken", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebaseappcheckProjectsAppsExchangeSafetyNetTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFirebaseAppcheckV1betaAppCheckToken])
                res.google_firebase_appcheck_v1beta_app_check_token = out

        return res

    
    def firebaseappcheck_projects_apps_generate_app_attest_challenge(self, request: operations.FirebaseappcheckProjectsAppsGenerateAppAttestChallengeRequest) -> operations.FirebaseappcheckProjectsAppsGenerateAppAttestChallengeResponse:
        r"""Generates a challenge that protects the integrity of an immediately following call to ExchangeAppAttestAttestation or ExchangeAppAttestAssertion. A challenge should not be reused for multiple calls.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{app}:generateAppAttestChallenge", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebaseappcheckProjectsAppsGenerateAppAttestChallengeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFirebaseAppcheckV1betaGenerateAppAttestChallengeResponse])
                res.google_firebase_appcheck_v1beta_generate_app_attest_challenge_response = out

        return res

    
    def firebaseappcheck_projects_apps_generate_play_integrity_challenge(self, request: operations.FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeRequest) -> operations.FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeResponse:
        r"""Generates a challenge that protects the integrity of an immediately following integrity verdict request to the Play Integrity API. The next call to ExchangePlayIntegrityToken using the resulting integrity token will verify the presence and validity of the challenge. A challenge should not be reused for multiple calls.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{app}:generatePlayIntegrityChallenge", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFirebaseAppcheckV1betaGeneratePlayIntegrityChallengeResponse])
                res.google_firebase_appcheck_v1beta_generate_play_integrity_challenge_response = out

        return res

    
    def firebaseappcheck_projects_apps_play_integrity_config_batch_get(self, request: operations.FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetRequest) -> operations.FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetResponse:
        r"""Atomically gets the PlayIntegrityConfigs for the specified list of apps.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{parent}/apps/-/playIntegrityConfig:batchGet", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFirebaseAppcheckV1betaBatchGetPlayIntegrityConfigsResponse])
                res.google_firebase_appcheck_v1beta_batch_get_play_integrity_configs_response = out

        return res

    
    def firebaseappcheck_projects_apps_recaptcha_config_batch_get(self, request: operations.FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetRequest) -> operations.FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetResponse:
        r"""Atomically gets the RecaptchaConfigs for the specified list of apps. For security reasons, the `site_secret` field is never populated in the response.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{parent}/apps/-/recaptchaConfig:batchGet", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFirebaseAppcheckV1betaBatchGetRecaptchaConfigsResponse])
                res.google_firebase_appcheck_v1beta_batch_get_recaptcha_configs_response = out

        return res

    
    def firebaseappcheck_projects_apps_recaptcha_enterprise_config_batch_get(self, request: operations.FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetRequest) -> operations.FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetResponse:
        r"""Atomically gets the RecaptchaEnterpriseConfigs for the specified list of apps.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{parent}/apps/-/recaptchaEnterpriseConfig:batchGet", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFirebaseAppcheckV1betaBatchGetRecaptchaEnterpriseConfigsResponse])
                res.google_firebase_appcheck_v1beta_batch_get_recaptcha_enterprise_configs_response = out

        return res

    
    def firebaseappcheck_projects_apps_recaptcha_v3_config_batch_get(self, request: operations.FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetRequest) -> operations.FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetResponse:
        r"""Atomically gets the RecaptchaV3Configs for the specified list of apps. For security reasons, the `site_secret` field is never populated in the response.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{parent}/apps/-/recaptchaV3Config:batchGet", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFirebaseAppcheckV1betaBatchGetRecaptchaV3ConfigsResponse])
                res.google_firebase_appcheck_v1beta_batch_get_recaptcha_v3_configs_response = out

        return res

    
    def firebaseappcheck_projects_apps_safety_net_config_batch_get(self, request: operations.FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetRequest) -> operations.FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetResponse:
        r"""Atomically gets the SafetyNetConfigs for the specified list of apps.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{parent}/apps/-/safetyNetConfig:batchGet", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFirebaseAppcheckV1betaBatchGetSafetyNetConfigsResponse])
                res.google_firebase_appcheck_v1beta_batch_get_safety_net_configs_response = out

        return res

    
    def firebaseappcheck_projects_services_batch_update(self, request: operations.FirebaseappcheckProjectsServicesBatchUpdateRequest) -> operations.FirebaseappcheckProjectsServicesBatchUpdateResponse:
        r"""Atomically updates the specified Service configurations.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{parent}/services:batchUpdate", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebaseappcheckProjectsServicesBatchUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFirebaseAppcheckV1betaBatchUpdateServicesResponse])
                res.google_firebase_appcheck_v1beta_batch_update_services_response = out

        return res

    
    def firebaseappcheck_projects_services_get(self, request: operations.FirebaseappcheckProjectsServicesGetRequest) -> operations.FirebaseappcheckProjectsServicesGetResponse:
        r"""Gets the Service configuration for the specified service name.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebaseappcheckProjectsServicesGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFirebaseAppcheckV1betaService])
                res.google_firebase_appcheck_v1beta_service = out

        return res

    
    def firebaseappcheck_projects_services_list(self, request: operations.FirebaseappcheckProjectsServicesListRequest) -> operations.FirebaseappcheckProjectsServicesListResponse:
        r"""Lists all Service configurations for the specified project. Only Services which were explicitly configured using UpdateService or BatchUpdateServices will be returned.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{parent}/services", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebaseappcheckProjectsServicesListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFirebaseAppcheckV1betaListServicesResponse])
                res.google_firebase_appcheck_v1beta_list_services_response = out

        return res

    
    def firebaseappcheck_projects_services_patch(self, request: operations.FirebaseappcheckProjectsServicesPatchRequest) -> operations.FirebaseappcheckProjectsServicesPatchResponse:
        r"""Updates the specified Service configuration.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1beta/{name}", request.path_params)
        
        headers = {}
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebaseappcheckProjectsServicesPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFirebaseAppcheckV1betaService])
                res.google_firebase_appcheck_v1beta_service = out

        return res

    