import warnings
import requests
from typing import Optional
from sdk.models import operations, shared
from . import utils


SERVERS = [
	"https://openbanking.org.uk",
	"https://openbanking.org.uk/open-banking/v3.1/cbpii",
]


class SDK:
    client = requests.Session()
    server_url = SERVERS[0]

    def config_server_url(self, server_url: str, params: dict[str, str]):
        if not params is None:
            self.server_url = utils.replace_parameters(server_url, params)
        else:
            self.server_url = server_url
    
    
    def create_funds_confirmation_consents(self, request: operations.CreateFundsConfirmationConsentsRequest) -> operations.CreateFundsConfirmationConsentsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/funds-confirmation-consents"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateFundsConfirmationConsentsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObFundsConfirmationConsentResponse1])
                res.ob_funds_confirmation_consent_response1 = out
        elif r.status_code == 400:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 401:
            res.headers = r.headers
        elif r.status_code == 403:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 405:
            res.headers = r.headers
        elif r.status_code == 406:
            res.headers = r.headers
        elif r.status_code == 415:
            res.headers = r.headers
        elif r.status_code == 429:
            res.headers = r.headers
        elif r.status_code == 500:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out

        return res

    
    
    def create_funds_confirmations(self, request: operations.CreateFundsConfirmationsRequest) -> operations.CreateFundsConfirmationsResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = base_url.removesuffix("/") + "/funds-confirmations"
        
        req_content_type, data, form = utils.serialize_request_body(request)
        headers = {}
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers = {"content-type": req_content_type}
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateFundsConfirmationsResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 201:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObFundsConfirmationResponse1])
                res.ob_funds_confirmation_response1 = out
        elif r.status_code == 400:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 401:
            res.headers = r.headers
        elif r.status_code == 403:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 405:
            res.headers = r.headers
        elif r.status_code == 406:
            res.headers = r.headers
        elif r.status_code == 415:
            res.headers = r.headers
        elif r.status_code == 429:
            res.headers = r.headers
        elif r.status_code == 500:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out

        return res

    
    
    def delete_funds_confirmation_consents_consent_id(self, request: operations.DeleteFundsConfirmationConsentsConsentIDRequest) -> operations.DeleteFundsConfirmationConsentsConsentIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/funds-confirmation-consents/{ConsentId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteFundsConfirmationConsentsConsentIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 204:
            res.headers = r.headers
        elif r.status_code == 400:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 401:
            res.headers = r.headers
        elif r.status_code == 403:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 405:
            res.headers = r.headers
        elif r.status_code == 406:
            res.headers = r.headers
        elif r.status_code == 429:
            res.headers = r.headers
        elif r.status_code == 500:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out

        return res

    
    
    def get_funds_confirmation_consents_consent_id(self, request: operations.GetFundsConfirmationConsentsConsentIDRequest) -> operations.GetFundsConfirmationConsentsConsentIDResponse:
        warnings.simplefilter("ignore")

        base_url = self.server_url
        url = utils.generate_url(base_url, "/funds-confirmation-consents/{ConsentId}", request.path_params)
        
        client = utils.configure_security_client(request.security)
        

        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFundsConfirmationConsentsConsentIDResponse(status_code=r.status_code, content_type=content_type)
        if r.status_code == 200:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObFundsConfirmationConsentResponse1])
                res.ob_funds_confirmation_consent_response1 = out
        elif r.status_code == 400:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 401:
            res.headers = r.headers
        elif r.status_code == 403:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 405:
            res.headers = r.headers
        elif r.status_code == 406:
            res.headers = r.headers
        elif r.status_code == 429:
            res.headers = r.headers
        elif r.status_code == 500:
            res.headers = r.headers
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out

        return res

    