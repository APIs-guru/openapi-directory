

import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://openbanking.org.uk",
	"https://openbanking.org.uk/open-banking/v3.1/cbpii",
]


class SDK:
    

    _client: requests.Session
    _security_client: requests.Session
    
    _server_url: str = SERVERS[0]
    _language: str = "python"
    _sdk_version: str = "0.0.1"
    _gen_version: str = "internal"

    def __init__(self) -> None:
        self._client = requests.Session()
        self._security_client = requests.Session()
        


    def config_server_url(self, server_url: str, params: dict[str, str]):
        if params is not None:
            self._server_url = utils.replace_parameters(server_url, params)
        else:
            self._server_url = server_url

        
    

    def config_client(self, client: requests.Session):
        self._client = client
        
    
    
    
    def create_funds_confirmation_consents(self, request: operations.CreateFundsConfirmationConsentsRequest) -> operations.CreateFundsConfirmationConsentsResponse:
        r"""Create Funds Confirmation Consent
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/funds-confirmation-consents"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
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
        r"""Create Funds Confirmation
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/funds-confirmations"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
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
        r"""Delete Funds Confirmation Consent
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/funds-confirmation-consents/{ConsentId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, headers=headers)
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
        r"""Get Funds Confirmation Consent
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/funds-confirmation-consents/{ConsentId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
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

    