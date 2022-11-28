import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class PaymentInitiationServicePis:
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

    
    def cancel_payment(self, request: operations.CancelPaymentRequest) -> operations.CancelPaymentResponse:
        r"""Payment cancellation request
        This method initiates the cancellation of a payment. 
        Depending on the payment-service, the payment-product and the ASPSP's implementation, 
        this TPP call might be sufficient to cancel a payment. 
        If an authorisation of the payment cancellation is mandated by the ASPSP, 
        a corresponding hyperlink will be contained in the response message.
        
        Cancels the addressed payment with resource identification paymentId if applicable to the payment-service, payment-product and received in product related timelines (e.g. before end of business day for scheduled payments of the last business day before the scheduled execution day). 
        
        The response to this DELETE command will tell the TPP whether the
          * access method was rejected,
          * access method was successful, or
          * access method is generally applicable, but further authorisation processes are needed.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{payment-service}/{payment-product}/{paymentId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CancelPaymentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaymentInitiationCancelResponse202])
                res.payment_initiation_cancel_response_202 = out
        elif r.status_code == 204:
            res.headers = r.headers
            
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
                out = utils.unmarshal_json(r.text, Optional[shared.Error405NgPisCanc])
                res.error405_ng_pis_canc = out
            if utils.match_content_type(content_type, "application/problem+json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Error405PisCanc])
                res.error405_pis_canc = out
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

    
    def get_payment_information(self, request: operations.GetPaymentInformationRequest) -> operations.GetPaymentInformationResponse:
        r"""Get payment information
        Returns the content of a payment object
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{payment-service}/{payment-product}/{paymentId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPaymentInformationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.get_payment_information_200_application_json_one_of = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "multipart/form-data"):
                res.body = r.content
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

    
    def get_payment_initiation_cancellation_authorisation_information(self, request: operations.GetPaymentInitiationCancellationAuthorisationInformationRequest) -> operations.GetPaymentInitiationCancellationAuthorisationInformationResponse:
        r"""Will deliver an array of resource identifications to all generated cancellation authorisation sub-resources
        Retrieve a list of all created cancellation authorisation sub-resources.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{payment-service}/{payment-product}/{paymentId}/cancellation-authorisations", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPaymentInitiationCancellationAuthorisationInformationResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def get_payment_initiation_status(self, request: operations.GetPaymentInitiationStatusRequest) -> operations.GetPaymentInitiationStatusResponse:
        r"""Payment initiation status request
        Check the transaction status of a payment initiation.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{payment-service}/{payment-product}/{paymentId}/status", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPaymentInitiationStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaymentInitiationStatusResponse200JSON])
                res.payment_initiation_status_response_200_json = out
            if utils.match_content_type(content_type, "application/xml"):
                res.payment_initiation_status_response_200_xml = r.content
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

    
    def initiate_payment(self, request: operations.InitiatePaymentRequest) -> operations.InitiatePaymentResponse:
        r"""Payment initiation request
        This method is used to initiate a payment at the ASPSP.
        
        ## Variants of payment initiation requests
        
        This method to initiate a payment initiation at the ASPSP can be sent with either a JSON body or an pain.001 body depending on the payment product in the path.
        
        There are the following **payment products**:
        
          - Payment products with payment information in *JSON* format:
            - ***domestic-swiss-credit-transfers-isr***
            - ***domestic-swiss-credit-transfers***
            - ***domestic-swiss-credit-transfers-qr***
            - ***domestic-swiss-foreign-credit-transfers***
            - ***swiss-sepa-credit-transfers***
            - ***swiss-cross-border-credit-transfers***
          - Payment products with payment information in *SIX pain.001* XML format:
            - ***pain.001-sepa-credit-transfers***
            - ***pain.001-cross-border-credit-transfers***
            - ***pain.001-swiss-six-credit-transfers***
        
        Furthermore the request body depends on the **payment-service**:
          * ***payments***: A single payment initiation request.
          * ***bulk-payments***: A collection of several payment initiation requests.
          
            In case of a *pain.001* message there are more than one payments contained in the *pain.001 message.
        
            In case of a *JSON* there are several JSON payment blocks contained in a joining list.
          * ***periodic-payments***:
            Create a standing order initiation resource for recurrent i.e. periodic payments addressable under {paymentId}
             with all data relevant for the corresponding payment product and the execution of the standing order contained in a JSON body.
        
        This is the first step in the API to initiate the related recurring/periodic payment.
        
        ## Single and mulitilevel SCA Processes
        
        The payment initiation requests are independent from the need of one or multilevel 
        SCA processing, i.e. independent from the number of authorisations needed for the execution of payments. 
        
        But the response messages are specific to either one SCA processing or multilevel SCA processing. 
        
        For payment initiation with multilevel SCA, this specification requires an explicit start of the authorisation, 
        i.e. links directly associated with SCA processing like 'scaRedirect' or 'scaOAuth' cannot be contained in the 
        response message of a Payment Initation Request for a payment, where multiple authorisations are needed. 
        Also if any data is needed for the next action, like selecting an SCA method is not supported in the response, 
        since all starts of the multiple authorisations are fully equal. 
        In these cases, first an authorisation sub-resource has to be generated following the 'startAuthorisation' link.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/{payment-service}/{payment-product}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.InitiatePaymentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PaymentInitationRequestResponse201])
                res.payment_initation_request_response_201 = out
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

    