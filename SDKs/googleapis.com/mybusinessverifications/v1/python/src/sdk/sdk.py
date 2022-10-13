import warnings
import requests
from typing import List,Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://mybusinessverifications.googleapis.com/",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def mybusinessverifications_locations_fetch_verification_options(self, request: operations.MybusinessverificationsLocationsFetchVerificationOptionsRequest) -> operations.MybusinessverificationsLocationsFetchVerificationOptionsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{location}:fetchVerificationOptions", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessverificationsLocationsFetchVerificationOptionsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.FetchVerificationOptionsResponse])
                res.fetch_verification_options_response = out

        return res

    
    
    def mybusinessverifications_locations_get_voice_of_merchant_state(self, request: operations.MybusinessverificationsLocationsGetVoiceOfMerchantStateRequest) -> operations.MybusinessverificationsLocationsGetVoiceOfMerchantStateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}/VoiceOfMerchantState", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessverificationsLocationsGetVoiceOfMerchantStateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VoiceOfMerchantState])
                res.voice_of_merchant_state = out

        return res

    
    
    def mybusinessverifications_locations_verifications_complete(self, request: operations.MybusinessverificationsLocationsVerificationsCompleteRequest) -> operations.MybusinessverificationsLocationsVerificationsCompleteResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}:complete", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessverificationsLocationsVerificationsCompleteResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.CompleteVerificationResponse])
                res.complete_verification_response = out

        return res

    
    
    def mybusinessverifications_locations_verifications_list(self, request: operations.MybusinessverificationsLocationsVerificationsListRequest) -> operations.MybusinessverificationsLocationsVerificationsListResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{parent}/verifications", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessverificationsLocationsVerificationsListResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ListVerificationsResponse])
                res.list_verifications_response = out

        return res

    
    
    def mybusinessverifications_locations_verify(self, request: operations.MybusinessverificationsLocationsVerifyRequest) -> operations.MybusinessverificationsLocationsVerifyResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/v1/{name}:verify", request.path_params)
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessverificationsLocationsVerifyResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.VerifyLocationResponse])
                res.verify_location_response = out

        return res

    
    
    def mybusinessverifications_verification_tokens_generate(self, request: operations.MybusinessverificationsVerificationTokensGenerateRequest) -> operations.MybusinessverificationsVerificationTokensGenerateResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/v1/verificationTokens:generate"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        query_params = utils.get_query_params(request.query_params)
        client = self.client

        r = client.request("POST", url, params=query_params, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MybusinessverificationsVerificationTokensGenerateResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GenerateVerificationTokenResponse])
                res.generate_verification_token_response = out

        return res

    