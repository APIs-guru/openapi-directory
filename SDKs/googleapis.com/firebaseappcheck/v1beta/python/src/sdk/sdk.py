import warnings
import requests
from typing import Any,List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://firebaseappcheck.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def firebaseappcheck_projects_apps_app_attest_config_batch_get(self, request: operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetRequest) -> operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta/{parent}/apps/-/appAttestConfig:batchGet", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebaseappcheckProjectsAppsAppAttestConfigBatchGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFirebaseAppcheckV1betaBatchGetAppAttestConfigsResponse])
                res.google_firebase_appcheck_v1beta_batch_get_app_attest_configs_response = out

        return res

    
    
    def firebaseappcheck_projects_apps_debug_tokens_create(self, request: operations.FirebaseappcheckProjectsAppsDebugTokensCreateRequest) -> operations.FirebaseappcheckProjectsAppsDebugTokensCreateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta/{parent}/debugTokens", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebaseappcheckProjectsAppsDebugTokensCreateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFirebaseAppcheckV1betaDebugToken])
                res.google_firebase_appcheck_v1beta_debug_token = out

        return res

    
    
    def firebaseappcheck_projects_apps_debug_tokens_delete(self, request: operations.FirebaseappcheckProjectsAppsDebugTokensDeleteRequest) -> operations.FirebaseappcheckProjectsAppsDebugTokensDeleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebaseappcheckProjectsAppsDebugTokensDeleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.google_protobuf_empty = out

        return res

    
    
    def firebaseappcheck_projects_apps_debug_tokens_list(self, request: operations.FirebaseappcheckProjectsAppsDebugTokensListRequest) -> operations.FirebaseappcheckProjectsAppsDebugTokensListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta/{parent}/debugTokens", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebaseappcheckProjectsAppsDebugTokensListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFirebaseAppcheckV1betaListDebugTokensResponse])
                res.google_firebase_appcheck_v1beta_list_debug_tokens_response = out

        return res

    
    
    def firebaseappcheck_projects_apps_device_check_config_batch_get(self, request: operations.FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetRequest) -> operations.FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta/{parent}/apps/-/deviceCheckConfig:batchGet", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebaseappcheckProjectsAppsDeviceCheckConfigBatchGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFirebaseAppcheckV1betaBatchGetDeviceCheckConfigsResponse])
                res.google_firebase_appcheck_v1beta_batch_get_device_check_configs_response = out

        return res

    
    
    def firebaseappcheck_projects_apps_exchange_app_attest_assertion(self, request: operations.FirebaseappcheckProjectsAppsExchangeAppAttestAssertionRequest) -> operations.FirebaseappcheckProjectsAppsExchangeAppAttestAssertionResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta/{app}:exchangeAppAttestAssertion", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebaseappcheckProjectsAppsExchangeAppAttestAssertionResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFirebaseAppcheckV1betaAppCheckToken])
                res.google_firebase_appcheck_v1beta_app_check_token = out

        return res

    
    
    def firebaseappcheck_projects_apps_exchange_app_attest_attestation(self, request: operations.FirebaseappcheckProjectsAppsExchangeAppAttestAttestationRequest) -> operations.FirebaseappcheckProjectsAppsExchangeAppAttestAttestationResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta/{app}:exchangeAppAttestAttestation", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebaseappcheckProjectsAppsExchangeAppAttestAttestationResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFirebaseAppcheckV1betaExchangeAppAttestAttestationResponse])
                res.google_firebase_appcheck_v1beta_exchange_app_attest_attestation_response = out

        return res

    
    
    def firebaseappcheck_projects_apps_exchange_custom_token(self, request: operations.FirebaseappcheckProjectsAppsExchangeCustomTokenRequest) -> operations.FirebaseappcheckProjectsAppsExchangeCustomTokenResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta/{app}:exchangeCustomToken", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebaseappcheckProjectsAppsExchangeCustomTokenResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFirebaseAppcheckV1betaAppCheckToken])
                res.google_firebase_appcheck_v1beta_app_check_token = out

        return res

    
    
    def firebaseappcheck_projects_apps_exchange_debug_token(self, request: operations.FirebaseappcheckProjectsAppsExchangeDebugTokenRequest) -> operations.FirebaseappcheckProjectsAppsExchangeDebugTokenResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta/{app}:exchangeDebugToken", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebaseappcheckProjectsAppsExchangeDebugTokenResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFirebaseAppcheckV1betaAppCheckToken])
                res.google_firebase_appcheck_v1beta_app_check_token = out

        return res

    
    
    def firebaseappcheck_projects_apps_exchange_device_check_token(self, request: operations.FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenRequest) -> operations.FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta/{app}:exchangeDeviceCheckToken", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebaseappcheckProjectsAppsExchangeDeviceCheckTokenResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFirebaseAppcheckV1betaAppCheckToken])
                res.google_firebase_appcheck_v1beta_app_check_token = out

        return res

    
    
    def firebaseappcheck_projects_apps_exchange_play_integrity_token(self, request: operations.FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenRequest) -> operations.FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta/{app}:exchangePlayIntegrityToken", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebaseappcheckProjectsAppsExchangePlayIntegrityTokenResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFirebaseAppcheckV1betaAppCheckToken])
                res.google_firebase_appcheck_v1beta_app_check_token = out

        return res

    
    
    def firebaseappcheck_projects_apps_exchange_recaptcha_enterprise_token(self, request: operations.FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenRequest) -> operations.FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta/{app}:exchangeRecaptchaEnterpriseToken", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebaseappcheckProjectsAppsExchangeRecaptchaEnterpriseTokenResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFirebaseAppcheckV1betaAppCheckToken])
                res.google_firebase_appcheck_v1beta_app_check_token = out

        return res

    
    
    def firebaseappcheck_projects_apps_exchange_recaptcha_token(self, request: operations.FirebaseappcheckProjectsAppsExchangeRecaptchaTokenRequest) -> operations.FirebaseappcheckProjectsAppsExchangeRecaptchaTokenResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta/{app}:exchangeRecaptchaToken", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebaseappcheckProjectsAppsExchangeRecaptchaTokenResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFirebaseAppcheckV1betaAppCheckToken])
                res.google_firebase_appcheck_v1beta_app_check_token = out

        return res

    
    
    def firebaseappcheck_projects_apps_exchange_recaptcha_v3_token(self, request: operations.FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenRequest) -> operations.FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta/{app}:exchangeRecaptchaV3Token", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebaseappcheckProjectsAppsExchangeRecaptchaV3TokenResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFirebaseAppcheckV1betaAppCheckToken])
                res.google_firebase_appcheck_v1beta_app_check_token = out

        return res

    
    
    def firebaseappcheck_projects_apps_exchange_safety_net_token(self, request: operations.FirebaseappcheckProjectsAppsExchangeSafetyNetTokenRequest) -> operations.FirebaseappcheckProjectsAppsExchangeSafetyNetTokenResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta/{app}:exchangeSafetyNetToken", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebaseappcheckProjectsAppsExchangeSafetyNetTokenResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFirebaseAppcheckV1betaAppCheckToken])
                res.google_firebase_appcheck_v1beta_app_check_token = out

        return res

    
    
    def firebaseappcheck_projects_apps_generate_app_attest_challenge(self, request: operations.FirebaseappcheckProjectsAppsGenerateAppAttestChallengeRequest) -> operations.FirebaseappcheckProjectsAppsGenerateAppAttestChallengeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta/{app}:generateAppAttestChallenge", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebaseappcheckProjectsAppsGenerateAppAttestChallengeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFirebaseAppcheckV1betaGenerateAppAttestChallengeResponse])
                res.google_firebase_appcheck_v1beta_generate_app_attest_challenge_response = out

        return res

    
    
    def firebaseappcheck_projects_apps_generate_play_integrity_challenge(self, request: operations.FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeRequest) -> operations.FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta/{app}:generatePlayIntegrityChallenge", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebaseappcheckProjectsAppsGeneratePlayIntegrityChallengeResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFirebaseAppcheckV1betaGeneratePlayIntegrityChallengeResponse])
                res.google_firebase_appcheck_v1beta_generate_play_integrity_challenge_response = out

        return res

    
    
    def firebaseappcheck_projects_apps_play_integrity_config_batch_get(self, request: operations.FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetRequest) -> operations.FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta/{parent}/apps/-/playIntegrityConfig:batchGet", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebaseappcheckProjectsAppsPlayIntegrityConfigBatchGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFirebaseAppcheckV1betaBatchGetPlayIntegrityConfigsResponse])
                res.google_firebase_appcheck_v1beta_batch_get_play_integrity_configs_response = out

        return res

    
    
    def firebaseappcheck_projects_apps_recaptcha_config_batch_get(self, request: operations.FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetRequest) -> operations.FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta/{parent}/apps/-/recaptchaConfig:batchGet", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebaseappcheckProjectsAppsRecaptchaConfigBatchGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFirebaseAppcheckV1betaBatchGetRecaptchaConfigsResponse])
                res.google_firebase_appcheck_v1beta_batch_get_recaptcha_configs_response = out

        return res

    
    
    def firebaseappcheck_projects_apps_recaptcha_enterprise_config_batch_get(self, request: operations.FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetRequest) -> operations.FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta/{parent}/apps/-/recaptchaEnterpriseConfig:batchGet", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebaseappcheckProjectsAppsRecaptchaEnterpriseConfigBatchGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFirebaseAppcheckV1betaBatchGetRecaptchaEnterpriseConfigsResponse])
                res.google_firebase_appcheck_v1beta_batch_get_recaptcha_enterprise_configs_response = out

        return res

    
    
    def firebaseappcheck_projects_apps_recaptcha_v3_config_batch_get(self, request: operations.FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetRequest) -> operations.FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta/{parent}/apps/-/recaptchaV3Config:batchGet", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebaseappcheckProjectsAppsRecaptchaV3ConfigBatchGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFirebaseAppcheckV1betaBatchGetRecaptchaV3ConfigsResponse])
                res.google_firebase_appcheck_v1beta_batch_get_recaptcha_v3_configs_response = out

        return res

    
    
    def firebaseappcheck_projects_apps_safety_net_config_batch_get(self, request: operations.FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetRequest) -> operations.FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta/{parent}/apps/-/safetyNetConfig:batchGet", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebaseappcheckProjectsAppsSafetyNetConfigBatchGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFirebaseAppcheckV1betaBatchGetSafetyNetConfigsResponse])
                res.google_firebase_appcheck_v1beta_batch_get_safety_net_configs_response = out

        return res

    
    
    def firebaseappcheck_projects_services_batch_update(self, request: operations.FirebaseappcheckProjectsServicesBatchUpdateRequest) -> operations.FirebaseappcheckProjectsServicesBatchUpdateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta/{parent}/services:batchUpdate", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebaseappcheckProjectsServicesBatchUpdateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFirebaseAppcheckV1betaBatchUpdateServicesResponse])
                res.google_firebase_appcheck_v1beta_batch_update_services_response = out

        return res

    
    
    def firebaseappcheck_projects_services_get(self, request: operations.FirebaseappcheckProjectsServicesGetRequest) -> operations.FirebaseappcheckProjectsServicesGetResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta/{name}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebaseappcheckProjectsServicesGetResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFirebaseAppcheckV1betaService])
                res.google_firebase_appcheck_v1beta_service = out

        return res

    
    
    def firebaseappcheck_projects_services_list(self, request: operations.FirebaseappcheckProjectsServicesListRequest) -> operations.FirebaseappcheckProjectsServicesListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta/{parent}/services", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebaseappcheckProjectsServicesListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFirebaseAppcheckV1betaListServicesResponse])
                res.google_firebase_appcheck_v1beta_list_services_response = out

        return res

    
    
    def firebaseappcheck_projects_services_patch(self, request: operations.FirebaseappcheckProjectsServicesPatchRequest) -> operations.FirebaseappcheckProjectsServicesPatchResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1beta/{name}", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = utils.configure_security_client(request.security)
        

        r = client.request("PATCH", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.FirebaseappcheckProjectsServicesPatchResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GoogleFirebaseAppcheckV1betaService])
                res.google_firebase_appcheck_v1beta_service = out

        return res

    