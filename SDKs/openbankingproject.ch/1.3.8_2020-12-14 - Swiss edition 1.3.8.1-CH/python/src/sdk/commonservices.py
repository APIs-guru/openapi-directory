import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class CommonServices:
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

    
    def delete_signing_basket(self, request: operations.DeleteSigningBasketRequest) -> operations.DeleteSigningBasketResponse:
        r"""Delete the signing basket
        Delete the signing basket structure as long as no (partial) authorisation has yet been applied.
        The undlerying transactions are not affected by this deletion.
        
        Remark: The signing basket as such is not deletable after a first (partial) authorisation has been applied.
        Nevertheless, single transactions might be cancelled on an individual basis on the XS2A interface.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/signing-baskets/{basketId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteSigningBasketResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            res.headers = r.headers
            
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error400NgSbs])
                res.error400_ng_sbs = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error400Sbs])
                res.error400_sbs = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401NgSbs])
                res.error401_ng_sbs = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401Sbs])
                res.error401_sbs = out
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403NgSbs])
                res.error403_ng_sbs = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403Sbs])
                res.error403_sbs = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404NgSbs])
                res.error404_ng_sbs = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404Sbs])
                res.error404_sbs = out
        elif r.status_code == 405:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405NgSbs])
                res.error405_ng_sbs = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405Sbs])
                res.error405_sbs = out
        elif r.status_code == 406:
            res.headers = r.headers
            
        elif r.status_code == 408:
            res.headers = r.headers
            
        elif r.status_code == 409:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409NgSbs])
                res.error409_ng_sbs = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409Sbs])
                res.error409_sbs = out
        elif r.status_code == 415:
            res.headers = r.headers
            
        elif r.status_code == 429:
            res.headers = r.headers
            
        elif r.status_code == 500:
            res.headers = r.headers
            
        elif r.status_code == 503:
            res.headers = r.headers
            

        return res

    
    def get_consent_sca_status(self, request: operations.GetConsentScaStatusRequest) -> operations.GetConsentScaStatusResponse:
        r"""Read the SCA status of the consent authorisation
        This method returns the SCA status of a consent initiation's authorisation sub-resource.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/consents/{consentId}/authorisations/{authorisationId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConsentScaStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScaStatusResponse])
                res.sca_status_response = out
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
                out = utils.unmarshal_json(r.text, Optional[shared.Error401NgAis])
                res.error401_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401Ais])
                res.error401_ais = out
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403NgAis])
                res.error403_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403Ais])
                res.error403_ais = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404NgAis])
                res.error404_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404Ais])
                res.error404_ais = out
        elif r.status_code == 405:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405NgAis])
                res.error405_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405Ais])
                res.error405_ais = out
        elif r.status_code == 406:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error406NgAis])
                res.error406_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error406Ais])
                res.error406_ais = out
        elif r.status_code == 408:
            res.headers = r.headers
            
        elif r.status_code == 409:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409NgAis])
                res.error409_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409Ais])
                res.error409_ais = out
        elif r.status_code == 415:
            res.headers = r.headers
            
        elif r.status_code == 429:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error429NgAis])
                res.error429_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error429Ais])
                res.error429_ais = out
        elif r.status_code == 500:
            res.headers = r.headers
            
        elif r.status_code == 503:
            res.headers = r.headers
            

        return res

    
    def get_payment_cancellation_sca_status(self, request: operations.GetPaymentCancellationScaStatusRequest) -> operations.GetPaymentCancellationScaStatusResponse:
        r"""Read the SCA status of the payment cancellation's authorisation
        This method returns the SCA status of a payment initiation's authorisation sub-resource.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{payment-service}/{payment-product}/{paymentId}/cancellation-authorisations/{authorisationId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPaymentCancellationScaStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScaStatusResponse])
                res.sca_status_response = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error400NgPis])
                res.error400_ng_pis = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error400Pis])
                res.error400_pis = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401NgPis])
                res.error401_ng_pis = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401Pis])
                res.error401_pis = out
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403NgPis])
                res.error403_ng_pis = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403Pis])
                res.error403_pis = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404NgPis])
                res.error404_ng_pis = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404Pis])
                res.error404_pis = out
        elif r.status_code == 405:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405NgPis])
                res.error405_ng_pis = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405Pis])
                res.error405_pis = out
        elif r.status_code == 406:
            res.headers = r.headers
            
        elif r.status_code == 408:
            res.headers = r.headers
            
        elif r.status_code == 409:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409NgPis])
                res.error409_ng_pis = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409Pis])
                res.error409_pis = out
        elif r.status_code == 415:
            res.headers = r.headers
            
        elif r.status_code == 429:
            res.headers = r.headers
            
        elif r.status_code == 500:
            res.headers = r.headers
            
        elif r.status_code == 503:
            res.headers = r.headers
            

        return res

    
    def get_payment_initiation_authorisation(self, request: operations.GetPaymentInitiationAuthorisationRequest) -> operations.GetPaymentInitiationAuthorisationResponse:
        r"""Get payment initiation authorisation sub-resources request
        Read a list of all authorisation subresources IDs which have been created.
        
        This function returns an array of hyperlinks to all generated authorisation sub-resources.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{payment-service}/{payment-product}/{paymentId}/authorisations", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPaymentInitiationAuthorisationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Authorisations])
                res.authorisations = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error400NgPis])
                res.error400_ng_pis = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error400Pis])
                res.error400_pis = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401NgPis])
                res.error401_ng_pis = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401Pis])
                res.error401_pis = out
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403NgPis])
                res.error403_ng_pis = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403Pis])
                res.error403_pis = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404NgPis])
                res.error404_ng_pis = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404Pis])
                res.error404_pis = out
        elif r.status_code == 405:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405NgPis])
                res.error405_ng_pis = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405Pis])
                res.error405_pis = out
        elif r.status_code == 406:
            res.headers = r.headers
            
        elif r.status_code == 408:
            res.headers = r.headers
            
        elif r.status_code == 409:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409NgPis])
                res.error409_ng_pis = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409Pis])
                res.error409_pis = out
        elif r.status_code == 415:
            res.headers = r.headers
            
        elif r.status_code == 429:
            res.headers = r.headers
            
        elif r.status_code == 500:
            res.headers = r.headers
            
        elif r.status_code == 503:
            res.headers = r.headers
            

        return res

    
    def get_payment_initiation_sca_status(self, request: operations.GetPaymentInitiationScaStatusRequest) -> operations.GetPaymentInitiationScaStatusResponse:
        r"""Read the SCA status of the payment authorisation
        This method returns the SCA status of a payment initiation's authorisation sub-resource.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{payment-service}/{payment-product}/{paymentId}/authorisations/{authorisationId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPaymentInitiationScaStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScaStatusResponse])
                res.sca_status_response = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error400NgPis])
                res.error400_ng_pis = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error400Pis])
                res.error400_pis = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401NgPis])
                res.error401_ng_pis = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401Pis])
                res.error401_pis = out
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403NgPis])
                res.error403_ng_pis = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403Pis])
                res.error403_pis = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404NgPis])
                res.error404_ng_pis = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404Pis])
                res.error404_pis = out
        elif r.status_code == 405:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405NgPis])
                res.error405_ng_pis = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405Pis])
                res.error405_pis = out
        elif r.status_code == 406:
            res.headers = r.headers
            
        elif r.status_code == 408:
            res.headers = r.headers
            
        elif r.status_code == 409:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409NgPis])
                res.error409_ng_pis = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409Pis])
                res.error409_pis = out
        elif r.status_code == 415:
            res.headers = r.headers
            
        elif r.status_code == 429:
            res.headers = r.headers
            
        elif r.status_code == 500:
            res.headers = r.headers
            
        elif r.status_code == 503:
            res.headers = r.headers
            

        return res

    
    def get_signing_basket_authorisation(self, request: operations.GetSigningBasketAuthorisationRequest) -> operations.GetSigningBasketAuthorisationResponse:
        r"""Get signing basket authorisation sub-resources request
        Read a list of all authorisation subresources IDs which have been created.
        
        This function returns an array of hyperlinks to all generated authorisation sub-resources.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/signing-baskets/{basketId}/authorisations", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSigningBasketAuthorisationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Authorisations])
                res.authorisations = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error400NgSbs])
                res.error400_ng_sbs = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error400Sbs])
                res.error400_sbs = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401NgSbs])
                res.error401_ng_sbs = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401Sbs])
                res.error401_sbs = out
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403NgSbs])
                res.error403_ng_sbs = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403Sbs])
                res.error403_sbs = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404NgSbs])
                res.error404_ng_sbs = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404Sbs])
                res.error404_sbs = out
        elif r.status_code == 405:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405NgSbs])
                res.error405_ng_sbs = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405Sbs])
                res.error405_sbs = out
        elif r.status_code == 406:
            res.headers = r.headers
            
        elif r.status_code == 408:
            res.headers = r.headers
            
        elif r.status_code == 409:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409NgSbs])
                res.error409_ng_sbs = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409Sbs])
                res.error409_sbs = out
        elif r.status_code == 415:
            res.headers = r.headers
            
        elif r.status_code == 429:
            res.headers = r.headers
            
        elif r.status_code == 500:
            res.headers = r.headers
            
        elif r.status_code == 503:
            res.headers = r.headers
            

        return res

    
    def get_signing_basket_sca_status(self, request: operations.GetSigningBasketScaStatusRequest) -> operations.GetSigningBasketScaStatusResponse:
        r"""Read the SCA status of the signing basket authorisation
        This method returns the SCA status of a signing basket's authorisation sub-resource.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/signing-baskets/{basketId}/authorisations/{authorisationId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSigningBasketScaStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ScaStatusResponse])
                res.sca_status_response = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error400NgSbs])
                res.error400_ng_sbs = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error400Sbs])
                res.error400_sbs = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401NgSbs])
                res.error401_ng_sbs = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401Sbs])
                res.error401_sbs = out
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403NgSbs])
                res.error403_ng_sbs = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403Sbs])
                res.error403_sbs = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404NgSbs])
                res.error404_ng_sbs = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404Sbs])
                res.error404_sbs = out
        elif r.status_code == 405:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405NgSbs])
                res.error405_ng_sbs = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405Sbs])
                res.error405_sbs = out
        elif r.status_code == 406:
            res.headers = r.headers
            
        elif r.status_code == 408:
            res.headers = r.headers
            
        elif r.status_code == 409:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409NgSbs])
                res.error409_ng_sbs = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409Sbs])
                res.error409_sbs = out
        elif r.status_code == 415:
            res.headers = r.headers
            
        elif r.status_code == 429:
            res.headers = r.headers
            
        elif r.status_code == 500:
            res.headers = r.headers
            
        elif r.status_code == 503:
            res.headers = r.headers
            

        return res

    
    def get_signing_basket_status(self, request: operations.GetSigningBasketStatusRequest) -> operations.GetSigningBasketStatusResponse:
        r"""Read the status of the signing basket
        Returns the status of a signing basket object.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/signing-baskets/{basketId}/status", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSigningBasketStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SigningBasketStatusResponse200])
                res.signing_basket_status_response_200 = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error400NgSbs])
                res.error400_ng_sbs = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error400Sbs])
                res.error400_sbs = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401NgSbs])
                res.error401_ng_sbs = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401Sbs])
                res.error401_sbs = out
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403NgSbs])
                res.error403_ng_sbs = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403Sbs])
                res.error403_sbs = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404NgSbs])
                res.error404_ng_sbs = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404Sbs])
                res.error404_sbs = out
        elif r.status_code == 405:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405NgSbs])
                res.error405_ng_sbs = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405Sbs])
                res.error405_sbs = out
        elif r.status_code == 406:
            res.headers = r.headers
            
        elif r.status_code == 408:
            res.headers = r.headers
            
        elif r.status_code == 409:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409NgSbs])
                res.error409_ng_sbs = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409Sbs])
                res.error409_sbs = out
        elif r.status_code == 415:
            res.headers = r.headers
            
        elif r.status_code == 429:
            res.headers = r.headers
            
        elif r.status_code == 500:
            res.headers = r.headers
            
        elif r.status_code == 503:
            res.headers = r.headers
            

        return res

    
    def start_consent_authorisation(self, request: operations.StartConsentAuthorisationRequest) -> operations.StartConsentAuthorisationResponse:
        r"""Start the authorisation process for a consent
        Create an authorisation sub-resource and start the authorisation process of a consent.
        The message might in addition transmit authentication and authorisation related data.
        
        his method is iterated n times for a n times SCA authorisation in a
        corporate context, each creating an own authorisation sub-endpoint for
        the corresponding PSU authorising the consent.
        
        The ASPSP might make the usage of this access method unnecessary,
        since the related authorisation resource will be automatically created by
        the ASPSP after the submission of the consent data with the first POST consents call.
        
        The start authorisation process is a process which is needed for creating a new authorisation
        or cancellation sub-resource.
        
        This applies in the following scenarios:
        
          * The ASPSP has indicated with an 'startAuthorisation' hyperlink in the preceding Payment 
            initiation response that an explicit start of the authorisation process is needed by the TPP. 
            The 'startAuthorisation' hyperlink can transport more information about data which needs to be 
            uploaded by using the extended forms:
            * 'startAuthorisationWithPsuIdentfication', 
            * 'startAuthorisationWithPsuAuthentication' 
            * 'startAuthorisationWithEncryptedPsuAuthentication'
            * 'startAuthorisationWithAuthentciationMethodSelection'
          * The related payment initiation cannot yet be executed since a multilevel SCA is mandated.
          * The ASPSP has indicated with an 'startAuthorisation' hyperlink in the preceding 
            payment cancellation response that an explicit start of the authorisation process is needed by the TPP. 
            The 'startAuthorisation' hyperlink can transport more information about data which needs to be uploaded 
            by using the extended forms as indicated above.
          * The related payment cancellation request cannot be applied yet since a multilevel SCA is mandate for
            executing the cancellation.
          * The signing basket needs to be authorised yet.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/consents/{consentId}/authorisations", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StartConsentAuthorisationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StartScaprocessResponse])
                res.start_scaprocess_response = out
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
                out = utils.unmarshal_json(r.text, Optional[shared.Error401NgAis])
                res.error401_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401Ais])
                res.error401_ais = out
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403NgAis])
                res.error403_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403Ais])
                res.error403_ais = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404NgAis])
                res.error404_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404Ais])
                res.error404_ais = out
        elif r.status_code == 405:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405NgAis])
                res.error405_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405Ais])
                res.error405_ais = out
        elif r.status_code == 406:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error406NgAis])
                res.error406_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error406Ais])
                res.error406_ais = out
        elif r.status_code == 408:
            res.headers = r.headers
            
        elif r.status_code == 409:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409NgAis])
                res.error409_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409Ais])
                res.error409_ais = out
        elif r.status_code == 415:
            res.headers = r.headers
            
        elif r.status_code == 429:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error429NgAis])
                res.error429_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error429Ais])
                res.error429_ais = out
        elif r.status_code == 500:
            res.headers = r.headers
            
        elif r.status_code == 503:
            res.headers = r.headers
            

        return res

    
    def start_payment_authorisation(self, request: operations.StartPaymentAuthorisationRequest) -> operations.StartPaymentAuthorisationResponse:
        r"""Start the authorisation process for a payment initiation
        Create an authorisation sub-resource and start the authorisation process.
        The message might in addition transmit authentication and authorisation related data.
        
        This method is iterated n times for a n times SCA authorisation in a
        corporate context, each creating an own authorisation sub-endpoint for
        the corresponding PSU authorising the transaction.
        
        The ASPSP might make the usage of this access method unnecessary in case
        of only one SCA process needed, since the related authorisation resource
        might be automatically created by the ASPSP after the submission of the
        payment data with the first POST payments/{payment-product} call.
        
        The start authorisation process is a process which is needed for creating a new authorisation
        or cancellation sub-resource.
        
        This applies in the following scenarios:
        
          * The ASPSP has indicated with a 'startAuthorisation' hyperlink in the preceding Payment 
            initiation response that an explicit start of the authorisation process is needed by the TPP. 
            The 'startAuthorisation' hyperlink can transport more information about data which needs to be 
            uploaded by using the extended forms:
            * 'startAuthorisationWithPsuIdentfication'
            * 'startAuthorisationWithPsuAuthentication'
            * 'startAuthorisationWithEncryptedPsuAuthentication'
            * 'startAuthorisationWithAuthentciationMethodSelection'
          * The related payment initiation cannot yet be executed since a multilevel SCA is mandated.
          * The ASPSP has indicated with a 'startAuthorisation' hyperlink in the preceding 
            Payment cancellation response that an explicit start of the authorisation process is needed by the TPP. 
            The 'startAuthorisation' hyperlink can transport more information about data which needs to be uploaded 
            by using the extended forms as indicated above.
          * The related payment cancellation request cannot be applied yet since a multilevel SCA is mandate for
            executing the cancellation.
          * The signing basket needs to be authorised yet.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{payment-service}/{payment-product}/{paymentId}/authorisations", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StartPaymentAuthorisationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StartScaprocessResponse])
                res.start_scaprocess_response = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error400NgPis])
                res.error400_ng_pis = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error400Pis])
                res.error400_pis = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401NgPis])
                res.error401_ng_pis = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401Pis])
                res.error401_pis = out
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403NgPis])
                res.error403_ng_pis = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403Pis])
                res.error403_pis = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404NgPis])
                res.error404_ng_pis = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404Pis])
                res.error404_pis = out
        elif r.status_code == 405:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405NgPis])
                res.error405_ng_pis = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405Pis])
                res.error405_pis = out
        elif r.status_code == 406:
            res.headers = r.headers
            
        elif r.status_code == 408:
            res.headers = r.headers
            
        elif r.status_code == 409:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409NgPis])
                res.error409_ng_pis = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409Pis])
                res.error409_pis = out
        elif r.status_code == 415:
            res.headers = r.headers
            
        elif r.status_code == 429:
            res.headers = r.headers
            
        elif r.status_code == 500:
            res.headers = r.headers
            
        elif r.status_code == 503:
            res.headers = r.headers
            

        return res

    
    def start_payment_initiation_cancellation_authorisation(self, request: operations.StartPaymentInitiationCancellationAuthorisationRequest) -> operations.StartPaymentInitiationCancellationAuthorisationResponse:
        r"""Start the authorisation process for the cancellation of the addressed payment
        Creates an authorisation sub-resource and start the authorisation process of the cancellation of the addressed payment.
        The message might in addition transmit authentication and authorisation related data.
        
        This method is iterated n times for a n times SCA authorisation in a
        corporate context, each creating an own authorisation sub-endpoint for
        the corresponding PSU authorising the cancellation-authorisation.
        
        The ASPSP might make the usage of this access method unnecessary in case
        of only one SCA process needed, since the related authorisation resource
        might be automatically created by the ASPSP after the submission of the
        payment data with the first POST payments/{payment-product} call.
        
        The start authorisation process is a process which is needed for creating a new authorisation
        or cancellation sub-resource.
        
        This applies in the following scenarios:
        
          * The ASPSP has indicated with a 'startAuthorisation' hyperlink in the preceding payment 
            initiation response that an explicit start of the authorisation process is needed by the TPP. 
            The 'startAuthorisation' hyperlink can transport more information about data which needs to be 
            uploaded by using the extended forms:
            * 'startAuthorisationWithPsuIdentfication'
            * 'startAuthorisationWithPsuAuthentication'
            * 'startAuthorisationWithAuthentciationMethodSelection' 
          * The related payment initiation cannot yet be executed since a multilevel SCA is mandated.
          * The ASPSP has indicated with a 'startAuthorisation' hyperlink in the preceding 
            payment cancellation response that an explicit start of the authorisation process is needed by the TPP. 
            The 'startAuthorisation' hyperlink can transport more information about data which needs to be uploaded 
            by using the extended forms as indicated above.
          * The related payment cancellation request cannot be applied yet since a multilevel SCA is mandate for
            executing the cancellation.
          * The signing basket needs to be authorised yet.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{payment-service}/{payment-product}/{paymentId}/cancellation-authorisations", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StartPaymentInitiationCancellationAuthorisationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StartScaprocessResponse])
                res.start_scaprocess_response = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error400NgPis])
                res.error400_ng_pis = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error400Pis])
                res.error400_pis = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401NgPis])
                res.error401_ng_pis = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401Pis])
                res.error401_pis = out
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403NgPis])
                res.error403_ng_pis = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403Pis])
                res.error403_pis = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404NgPis])
                res.error404_ng_pis = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404Pis])
                res.error404_pis = out
        elif r.status_code == 405:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405NgPis])
                res.error405_ng_pis = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405Pis])
                res.error405_pis = out
        elif r.status_code == 406:
            res.headers = r.headers
            
        elif r.status_code == 408:
            res.headers = r.headers
            
        elif r.status_code == 409:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409NgPis])
                res.error409_ng_pis = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409Pis])
                res.error409_pis = out
        elif r.status_code == 415:
            res.headers = r.headers
            
        elif r.status_code == 429:
            res.headers = r.headers
            
        elif r.status_code == 500:
            res.headers = r.headers
            
        elif r.status_code == 503:
            res.headers = r.headers
            

        return res

    
    def start_signing_basket_authorisation(self, request: operations.StartSigningBasketAuthorisationRequest) -> operations.StartSigningBasketAuthorisationResponse:
        r"""Start the authorisation process for a signing basket
        Create an authorisation sub-resource and start the authorisation process of a signing basket.
        The message might in addition transmit authentication and authorisation related data.
        
        This method is iterated n times for a n times SCA authorisation in a
        corporate context, each creating an own authorisation sub-endpoint for
        the corresponding PSU authorising the signing-baskets.
        
        The ASPSP might make the usage of this access method unnecessary in case
        of only one SCA process needed, since the related authorisation resource
        might be automatically created by the ASPSP after the submission of the
        payment data with the first POST signing basket call.
        
        The start authorisation process is a process which is needed for creating a new authorisation
        or cancellation sub-resource.
        
        This applies in the following scenarios:
        
          * The ASPSP has indicated with a 'startAuthorisation' hyperlink in the preceding payment 
            initiation response that an explicit start of the authorisation process is needed by the TPP. 
            The 'startAuthorisation' hyperlink can transport more information about data which needs to be 
            uploaded by using the extended forms:
            * 'startAuthorisationWithPsuIdentfication', 
            * 'startAuthorisationWithPsuAuthentication' 
            * 'startAuthorisationWithEncryptedPsuAuthentication'
            * 'startAuthorisationWithAuthentciationMethodSelection'
          * The related payment initiation cannot yet be executed since a multilevel SCA is mandated.
          * The ASPSP has indicated with a 'startAuthorisation' hyperlink in the preceding 
            payment cancellation response that an explicit start of the authorisation process is needed by the TPP.
            The 'startAuthorisation' hyperlink can transport more information about data which needs to be uploaded
            by using the extended forms as indicated above.
          * The related payment cancellation request cannot be applied yet since a multilevel SCA is mandate for
            executing the cancellation.
          * The signing basket needs to be authorised yet.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/signing-baskets/{basketId}/authorisations", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.StartSigningBasketAuthorisationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.StartScaprocessResponse])
                res.start_scaprocess_response = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error400NgSbs])
                res.error400_ng_sbs = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error400Sbs])
                res.error400_sbs = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401NgSbs])
                res.error401_ng_sbs = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401Sbs])
                res.error401_sbs = out
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403NgSbs])
                res.error403_ng_sbs = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403Sbs])
                res.error403_sbs = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404NgSbs])
                res.error404_ng_sbs = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404Sbs])
                res.error404_sbs = out
        elif r.status_code == 405:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405NgSbs])
                res.error405_ng_sbs = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405Sbs])
                res.error405_sbs = out
        elif r.status_code == 406:
            res.headers = r.headers
            
        elif r.status_code == 408:
            res.headers = r.headers
            
        elif r.status_code == 409:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409NgSbs])
                res.error409_ng_sbs = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409Sbs])
                res.error409_sbs = out
        elif r.status_code == 415:
            res.headers = r.headers
            
        elif r.status_code == 429:
            res.headers = r.headers
            
        elif r.status_code == 500:
            res.headers = r.headers
            
        elif r.status_code == 503:
            res.headers = r.headers
            

        return res

    
    def update_consents_psu_data(self, request: operations.UpdateConsentsPsuDataRequest) -> operations.UpdateConsentsPsuDataResponse:
        r"""Update PSU Data for consents
        This method update PSU data on the consents  resource if needed.
        It may authorise a consent within the Embedded SCA Approach where needed.
        
        Independently from the SCA Approach it supports e.g. the selection of
        the authentication method and a non-SCA PSU authentication.
        
        There are several possible update PSU data requests in the context of a consent request if needed, 
        which depends on the SCA approach:
        
        * Redirect SCA Approach:
          A specific Update PSU data request is applicable for 
            * the selection of authentication methods, before choosing the actual SCA approach.
        * Decoupled SCA Approach:
          A specific update PSU data request is only applicable for
          * adding the PSU Identification, if not provided yet in the payment initiation request or the Account Information Consent Request, or if no OAuth2 access token is used, or
          * the selection of authentication methods.
        * Embedded SCA Approach: 
          The Update PSU data request might be used 
          * to add credentials as a first factor authentication data of the PSU and
          * to select the authentication method and
          * transaction authorisation.
        
        The SCA Approach might depend on the chosen SCA method. 
        For that reason, the following possible update PSU data request can apply to all SCA approaches:
        
        * Select an SCA method in case of several SCA methods are available for the customer.
        
        There are the following request types on this access path:
          * Update PSU identification
          * Update PSU authentication
          * Select PSU autorization method 
            WARNING: This method needs a reduced header, 
            therefore many optional elements are not present. 
            Maybe in a later version the access path will change.
          * Transaction Authorisation
            WARNING: This method needs a reduced header, 
            therefore many optional elements are not present. 
            Maybe in a later version the access path will change.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/consents/{consentId}/authorisations/{authorisationId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateConsentsPsuDataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.update_consents_psu_data_200_application_json_one_of = out
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
                out = utils.unmarshal_json(r.text, Optional[shared.Error401NgAis])
                res.error401_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401Ais])
                res.error401_ais = out
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403NgAis])
                res.error403_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403Ais])
                res.error403_ais = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404NgAis])
                res.error404_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404Ais])
                res.error404_ais = out
        elif r.status_code == 405:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405NgAis])
                res.error405_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405Ais])
                res.error405_ais = out
        elif r.status_code == 406:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error406NgAis])
                res.error406_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error406Ais])
                res.error406_ais = out
        elif r.status_code == 408:
            res.headers = r.headers
            
        elif r.status_code == 409:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409NgAis])
                res.error409_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409Ais])
                res.error409_ais = out
        elif r.status_code == 415:
            res.headers = r.headers
            
        elif r.status_code == 429:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error429NgAis])
                res.error429_ng_ais = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error429Ais])
                res.error429_ais = out
        elif r.status_code == 500:
            res.headers = r.headers
            
        elif r.status_code == 503:
            res.headers = r.headers
            

        return res

    
    def update_payment_cancellation_psu_data(self, request: operations.UpdatePaymentCancellationPsuDataRequest) -> operations.UpdatePaymentCancellationPsuDataResponse:
        r"""Update PSU data for payment initiation cancellation
        This method updates PSU data on the cancellation authorisation resource if needed. 
        It may authorise a cancellation of the payment within the Embedded SCA Approach where needed.
        
        Independently from the SCA Approach it supports e.g. the selection of
        the authentication method and a non-SCA PSU authentication.
        
        There are several possible update PSU data requests in the context of a cancellation authorisation within the payment initiation services needed, 
        which depends on the SCA approach:
        
        * Redirect SCA Approach:
          A specific Update PSU data request is applicable for 
            * the selection of authentication methods, before choosing the actual SCA approach.
        * Decoupled SCA Approach:
          A specific Update PSU data request is only applicable for
          * adding the PSU Identification, if not provided yet in the payment initiation request or the Account Information Consent Request, or if no OAuth2 access token is used, or
          * the selection of authentication methods.
        * Embedded SCA Approach: 
          The Update PSU data request might be used 
          * to add credentials as a first factor authentication data of the PSU and
          * to select the authentication method and
          * transaction authorisation.
        
        The SCA approach might depend on the chosen SCA method. 
        For that reason, the following possible update PSU data request can apply to all SCA approaches:
        
        * Select an SCA method in case of several SCA methods are available for the customer.
        
        There are the following request types on this access path:
          * Update PSU identification
          * Update PSU authentication
          * Select PSU autorization method 
            WARNING: This method needs a reduced header, 
            therefore many optional elements are not present. 
            Maybe in a later version the access path will change.
          * Transaction Authorisation
            WARNING: This method needs a reduced header, 
            therefore many optional elements are not present. 
            Maybe in a later version the access path will change.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{payment-service}/{payment-product}/{paymentId}/cancellation-authorisations/{authorisationId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdatePaymentCancellationPsuDataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.update_payment_cancellation_psu_data_200_application_json_one_of = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error400NgPis])
                res.error400_ng_pis = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error400Pis])
                res.error400_pis = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401NgPis])
                res.error401_ng_pis = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401Pis])
                res.error401_pis = out
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403NgPis])
                res.error403_ng_pis = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403Pis])
                res.error403_pis = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404NgPis])
                res.error404_ng_pis = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404Pis])
                res.error404_pis = out
        elif r.status_code == 405:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405NgPis])
                res.error405_ng_pis = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405Pis])
                res.error405_pis = out
        elif r.status_code == 406:
            res.headers = r.headers
            
        elif r.status_code == 408:
            res.headers = r.headers
            
        elif r.status_code == 409:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409NgPis])
                res.error409_ng_pis = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409Pis])
                res.error409_pis = out
        elif r.status_code == 415:
            res.headers = r.headers
            
        elif r.status_code == 429:
            res.headers = r.headers
            
        elif r.status_code == 500:
            res.headers = r.headers
            
        elif r.status_code == 503:
            res.headers = r.headers
            

        return res

    
    def update_payment_psu_data(self, request: operations.UpdatePaymentPsuDataRequest) -> operations.UpdatePaymentPsuDataResponse:
        r"""Update PSU data for payment initiation
        This methods updates PSU data on the authorisation resource if needed.
        It may authorise a payment within the Embedded SCA Approach where needed.
        
        Independently from the SCA Approach it supports e.g. the selection of
        the authentication method and a non-SCA PSU authentication.
        
        There are several possible update PSU data requests in the context of payment initiation services needed, 
        which depends on the SCA approach:
        
        * Redirect SCA Approach:
          A specific update PSU data request is applicable for 
            * the selection of authentication methods, before choosing the actual SCA approach.
        * Decoupled SCA Approach:
          A specific update PSU data request is only applicable for
          * adding the PSU identification, if not provided yet in the payment initiation request or the account information consent request, or if no OAuth2 access token is used, or
          * the selection of authentication methods.
        * Embedded SCA Approach: 
          The Update PSU Data request might be used 
          * to add credentials as a first factor authentication data of the PSU and
          * to select the authentication method and
          * transaction authorisation.
        
        The SCA Approach might depend on the chosen SCA method. 
        For that reason, the following possible Update PSU data request can apply to all SCA approaches:
        
        * Select an SCA method in case of several SCA methods are available for the customer.
        
        There are the following request types on this access path:
          * Update PSU identification
          * Update PSU authentication
          * Select PSU autorization method 
            WARNING: This method needs a reduced header, 
            therefore many optional elements are not present. 
            Maybe in a later version the access path will change.
          * Transaction authorisation
            WARNING: This method needs a reduced header, 
            therefore many optional elements are not present. 
            Maybe in a later version the access path will change.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{payment-service}/{payment-product}/{paymentId}/authorisations/{authorisationId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdatePaymentPsuDataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.update_payment_psu_data_200_application_json_one_of = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error400NgPis])
                res.error400_ng_pis = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error400Pis])
                res.error400_pis = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401NgPis])
                res.error401_ng_pis = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401Pis])
                res.error401_pis = out
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403NgPis])
                res.error403_ng_pis = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403Pis])
                res.error403_pis = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404NgPis])
                res.error404_ng_pis = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404Pis])
                res.error404_pis = out
        elif r.status_code == 405:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405NgPis])
                res.error405_ng_pis = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405Pis])
                res.error405_pis = out
        elif r.status_code == 406:
            res.headers = r.headers
            
        elif r.status_code == 408:
            res.headers = r.headers
            
        elif r.status_code == 409:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409NgPis])
                res.error409_ng_pis = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409Pis])
                res.error409_pis = out
        elif r.status_code == 415:
            res.headers = r.headers
            
        elif r.status_code == 429:
            res.headers = r.headers
            
        elif r.status_code == 500:
            res.headers = r.headers
            
        elif r.status_code == 503:
            res.headers = r.headers
            

        return res

    
    def update_signing_basket_psu_data(self, request: operations.UpdateSigningBasketPsuDataRequest) -> operations.UpdateSigningBasketPsuDataResponse:
        r"""Update PSU data for signing basket
        This method update PSU data on the signing basket resource if needed. 
        It may authorise a igning basket within the embedded SCA approach where needed.
        
        Independently from the SCA Approach it supports e.g. the selection of 
        the authentication method and a non-SCA PSU authentication.
        
        There are several possible update PSU data requests in the context of a consent request if needed, 
        which depends on the SCA approach:
        
        * Redirect SCA Approach:
          A specific Update PSU data request is applicable for 
            * the selection of authentication methods, before choosing the actual SCA approach.
        * Decoupled SCA Approach:
          A specific Update PSU data request is only applicable for
          * adding the PSU Identification, if not provided yet in the payment initiation request or the account information consent request, or if no OAuth2 access token is used, or
          * the selection of authentication methods.
        * Embedded SCA Approach: 
          The update PSU data request might be used 
          * to add credentials as a first factor authentication data of the PSU and
          * to select the authentication method and
          * transaction authorisation.
        
        The SCA approach might depend on the chosen SCA method. 
        For that reason, the following possible update PSU data request can apply to all SCA approaches:
        
        * Select an SCA method in case of several SCA methods are available for the customer.
        
        There are the following request types on this access path:
          * Update PSU identification
          * Update PSU authentication
          * Select PSU autorization Method 
            WARNING: This method needs a reduced header, 
            therefore many optional elements are not present. 
            Maybe in a later version the access path will change.
          * Transaction Authorisation
            WARNING: This method needs a reduced header, 
            therefore many optional elements are not present. 
            Maybe in a later version the access path will change.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/signing-baskets/{basketId}/authorisations/{authorisationId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateSigningBasketPsuDataResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.update_signing_basket_psu_data_200_application_json_one_of = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error400NgSbs])
                res.error400_ng_sbs = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error400Sbs])
                res.error400_sbs = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401NgSbs])
                res.error401_ng_sbs = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error401Sbs])
                res.error401_sbs = out
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403NgSbs])
                res.error403_ng_sbs = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error403Sbs])
                res.error403_sbs = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404NgSbs])
                res.error404_ng_sbs = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error404Sbs])
                res.error404_sbs = out
        elif r.status_code == 405:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405NgSbs])
                res.error405_ng_sbs = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405Sbs])
                res.error405_sbs = out
        elif r.status_code == 406:
            res.headers = r.headers
            
        elif r.status_code == 408:
            res.headers = r.headers
            
        elif r.status_code == 409:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409NgSbs])
                res.error409_ng_sbs = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error409Sbs])
                res.error409_sbs = out
        elif r.status_code == 415:
            res.headers = r.headers
            
        elif r.status_code == 429:
            res.headers = r.headers
            
        elif r.status_code == 500:
            res.headers = r.headers
            
        elif r.status_code == 503:
            res.headers = r.headers
            

        return res

    