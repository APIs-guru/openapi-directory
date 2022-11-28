import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class ConfirmationOfFundsServicePiis:
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

    
    def check_availability_of_funds(self, request: operations.CheckAvailabilityOfFundsRequest) -> operations.CheckAvailabilityOfFundsResponse:
        r"""Confirmation of funds request
        Creates a confirmation of funds request at the ASPSP. Checks whether a specific amount is available at point of time of the request on an account linked to a given tuple card issuer(TPP)/card number, or addressed by IBAN and TPP respectively.
        If the related extended services are used a conditional Consent-ID is contained in the header. This field is contained but commented out in this specification.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/funds-confirmations"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CheckAvailabilityOfFundsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CheckAvailabilityOfFunds200ApplicationJSON])
                res.check_availability_of_funds_200_application_json_object = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error400NgAis])
                res.error400_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error400Ais])
                res.error400_ais = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401NgPiis])
                res.error401_ng_piis = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401Piis])
                res.error401_piis = out
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403NgPiis])
                res.error403_ng_piis = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403Piis])
                res.error403_piis = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404NgPiis])
                res.error404_ng_piis = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404Piis])
                res.error404_piis = out
        elif r.status_code == 405:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405NgPiis])
                res.error405_ng_piis = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405Piis])
                res.error405_piis = out
        elif r.status_code == 406:
            res.headers = r.headers
            
        elif r.status_code == 408:
            res.headers = r.headers
            
        elif r.status_code == 409:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409NgPiis])
                res.error409_ng_piis = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409Piis])
                res.error409_piis = out
        elif r.status_code == 415:
            res.headers = r.headers
            
        elif r.status_code == 429:
            res.headers = r.headers
            
        elif r.status_code == 500:
            res.headers = r.headers
            
        elif r.status_code == 503:
            res.headers = r.headers
            

        return res

    