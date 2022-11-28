

import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils




SERVERS = [
	"https://openbanking.org.uk",
	"https://openbanking.org.uk/open-banking/v3.1/pisp",
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
        
    
    
    
    def create_domestic_payment_consents(self, request: operations.CreateDomesticPaymentConsentsRequest) -> operations.CreateDomesticPaymentConsentsResponse:
        r"""Create Domestic Payment Consents
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/domestic-payment-consents"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateDomesticPaymentConsentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteDomesticConsentResponse5])
                res.ob_write_domestic_consent_response5 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteDomesticConsentResponse5])
                res.ob_write_domestic_consent_response5 = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 401:
            res.headers = r.headers
            
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
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
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out

        return res

    
    def create_domestic_payments(self, request: operations.CreateDomesticPaymentsRequest) -> operations.CreateDomesticPaymentsResponse:
        r"""Create Domestic Payments
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/domestic-payments"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateDomesticPaymentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteDomesticResponse5])
                res.ob_write_domestic_response5 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteDomesticResponse5])
                res.ob_write_domestic_response5 = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 401:
            res.headers = r.headers
            
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
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
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out

        return res

    
    def create_domestic_scheduled_payment_consents(self, request: operations.CreateDomesticScheduledPaymentConsentsRequest) -> operations.CreateDomesticScheduledPaymentConsentsResponse:
        r"""Create Domestic Scheduled Payment Consents
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/domestic-scheduled-payment-consents"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateDomesticScheduledPaymentConsentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteDomesticScheduledConsentResponse5])
                res.ob_write_domestic_scheduled_consent_response5 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteDomesticScheduledConsentResponse5])
                res.ob_write_domestic_scheduled_consent_response5 = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 401:
            res.headers = r.headers
            
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 404:
            res.headers = r.headers
            
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
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out

        return res

    
    def create_domestic_scheduled_payments(self, request: operations.CreateDomesticScheduledPaymentsRequest) -> operations.CreateDomesticScheduledPaymentsResponse:
        r"""Create Domestic Scheduled Payments
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/domestic-scheduled-payments"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateDomesticScheduledPaymentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteDomesticScheduledResponse5])
                res.ob_write_domestic_scheduled_response5 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteDomesticScheduledResponse5])
                res.ob_write_domestic_scheduled_response5 = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 401:
            res.headers = r.headers
            
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 404:
            res.headers = r.headers
            
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
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out

        return res

    
    def create_domestic_standing_order_consents(self, request: operations.CreateDomesticStandingOrderConsentsRequest) -> operations.CreateDomesticStandingOrderConsentsResponse:
        r"""Create Domestic Standing Order Consents
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/domestic-standing-order-consents"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateDomesticStandingOrderConsentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteDomesticStandingOrderConsentResponse6])
                res.ob_write_domestic_standing_order_consent_response6 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteDomesticStandingOrderConsentResponse6])
                res.ob_write_domestic_standing_order_consent_response6 = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 401:
            res.headers = r.headers
            
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 404:
            res.headers = r.headers
            
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
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out

        return res

    
    def create_domestic_standing_orders(self, request: operations.CreateDomesticStandingOrdersRequest) -> operations.CreateDomesticStandingOrdersResponse:
        r"""Create Domestic Standing Orders
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/domestic-standing-orders"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateDomesticStandingOrdersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteDomesticStandingOrderResponse6])
                res.ob_write_domestic_standing_order_response6 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteDomesticStandingOrderResponse6])
                res.ob_write_domestic_standing_order_response6 = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 401:
            res.headers = r.headers
            
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 404:
            res.headers = r.headers
            
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
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out

        return res

    
    def create_file_payment_consents(self, request: operations.CreateFilePaymentConsentsRequest) -> operations.CreateFilePaymentConsentsResponse:
        r"""Create File Payment Consents
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/file-payment-consents"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateFilePaymentConsentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteFileConsentResponse4])
                res.ob_write_file_consent_response4 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteFileConsentResponse4])
                res.ob_write_file_consent_response4 = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 401:
            res.headers = r.headers
            
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 404:
            res.headers = r.headers
            
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
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out

        return res

    
    def create_file_payment_consents_consent_id_file(self, request: operations.CreateFilePaymentConsentsConsentIDFileRequest) -> operations.CreateFilePaymentConsentsConsentIDFileResponse:
        r"""Create File Payment Consents
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/file-payment-consents/{ConsentId}/file", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateFilePaymentConsentsConsentIDFileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 401:
            res.headers = r.headers
            
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 404:
            res.headers = r.headers
            
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
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out

        return res

    
    def create_file_payments(self, request: operations.CreateFilePaymentsRequest) -> operations.CreateFilePaymentsResponse:
        r"""Create File Payments
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/file-payments"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateFilePaymentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteFileResponse3])
                res.ob_write_file_response3 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteFileResponse3])
                res.ob_write_file_response3 = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 401:
            res.headers = r.headers
            
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 404:
            res.headers = r.headers
            
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
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out

        return res

    
    def create_international_payment_consents(self, request: operations.CreateInternationalPaymentConsentsRequest) -> operations.CreateInternationalPaymentConsentsResponse:
        r"""Create International Payment Consents
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/international-payment-consents"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateInternationalPaymentConsentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteInternationalConsentResponse6])
                res.ob_write_international_consent_response6 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteInternationalConsentResponse6])
                res.ob_write_international_consent_response6 = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 401:
            res.headers = r.headers
            
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 404:
            res.headers = r.headers
            
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
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out

        return res

    
    def create_international_payments(self, request: operations.CreateInternationalPaymentsRequest) -> operations.CreateInternationalPaymentsResponse:
        r"""Create International Payments
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/international-payments"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateInternationalPaymentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteInternationalResponse5])
                res.ob_write_international_response5 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteInternationalResponse5])
                res.ob_write_international_response5 = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 401:
            res.headers = r.headers
            
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 404:
            res.headers = r.headers
            
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
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out

        return res

    
    def create_international_scheduled_payment_consents(self, request: operations.CreateInternationalScheduledPaymentConsentsRequest) -> operations.CreateInternationalScheduledPaymentConsentsResponse:
        r"""Create International Scheduled Payment Consents
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/international-scheduled-payment-consents"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateInternationalScheduledPaymentConsentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteInternationalScheduledConsentResponse6])
                res.ob_write_international_scheduled_consent_response6 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteInternationalScheduledConsentResponse6])
                res.ob_write_international_scheduled_consent_response6 = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 401:
            res.headers = r.headers
            
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 404:
            res.headers = r.headers
            
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
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out

        return res

    
    def create_international_scheduled_payments(self, request: operations.CreateInternationalScheduledPaymentsRequest) -> operations.CreateInternationalScheduledPaymentsResponse:
        r"""Create International Scheduled Payments
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/international-scheduled-payments"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateInternationalScheduledPaymentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteInternationalScheduledResponse6])
                res.ob_write_international_scheduled_response6 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteInternationalScheduledResponse6])
                res.ob_write_international_scheduled_response6 = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 401:
            res.headers = r.headers
            
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 404:
            res.headers = r.headers
            
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
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out

        return res

    
    def create_international_standing_order_consents(self, request: operations.CreateInternationalStandingOrderConsentsRequest) -> operations.CreateInternationalStandingOrderConsentsResponse:
        r"""Create International Standing Order Consents
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/international-standing-order-consents"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateInternationalStandingOrderConsentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteInternationalStandingOrderConsentResponse7])
                res.ob_write_international_standing_order_consent_response7 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteInternationalStandingOrderConsentResponse7])
                res.ob_write_international_standing_order_consent_response7 = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 401:
            res.headers = r.headers
            
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 404:
            res.headers = r.headers
            
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
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out

        return res

    
    def create_international_standing_orders(self, request: operations.CreateInternationalStandingOrdersRequest) -> operations.CreateInternationalStandingOrdersResponse:
        r"""Create International Standing Orders
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/international-standing-orders"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, form = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, files=form, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateInternationalStandingOrdersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteInternationalStandingOrderResponse7])
                res.ob_write_international_standing_order_response7 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteInternationalStandingOrderResponse7])
                res.ob_write_international_standing_order_response7 = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 401:
            res.headers = r.headers
            
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 404:
            res.headers = r.headers
            
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
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out

        return res

    
    def get_domestic_payment_consents_consent_id(self, request: operations.GetDomesticPaymentConsentsConsentIDRequest) -> operations.GetDomesticPaymentConsentsConsentIDResponse:
        r"""Get Domestic Payment Consents
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/domestic-payment-consents/{ConsentId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDomesticPaymentConsentsConsentIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteDomesticConsentResponse5])
                res.ob_write_domestic_consent_response5 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteDomesticConsentResponse5])
                res.ob_write_domestic_consent_response5 = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 401:
            res.headers = r.headers
            
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
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
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out

        return res

    
    def get_domestic_payment_consents_consent_id_funds_confirmation(self, request: operations.GetDomesticPaymentConsentsConsentIDFundsConfirmationRequest) -> operations.GetDomesticPaymentConsentsConsentIDFundsConfirmationResponse:
        r"""Get Domestic Payment Consents Funds Confirmation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/domestic-payment-consents/{ConsentId}/funds-confirmation", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDomesticPaymentConsentsConsentIDFundsConfirmationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteFundsConfirmationResponse1])
                res.ob_write_funds_confirmation_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteFundsConfirmationResponse1])
                res.ob_write_funds_confirmation_response1 = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 401:
            res.headers = r.headers
            
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
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
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out

        return res

    
    def get_domestic_payments_domestic_payment_id(self, request: operations.GetDomesticPaymentsDomesticPaymentIDRequest) -> operations.GetDomesticPaymentsDomesticPaymentIDResponse:
        r"""Get Domestic Payments
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/domestic-payments/{DomesticPaymentId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDomesticPaymentsDomesticPaymentIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteDomesticResponse5])
                res.ob_write_domestic_response5 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteDomesticResponse5])
                res.ob_write_domestic_response5 = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 401:
            res.headers = r.headers
            
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
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
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out

        return res

    
    def get_domestic_payments_domestic_payment_id_payment_details(self, request: operations.GetDomesticPaymentsDomesticPaymentIDPaymentDetailsRequest) -> operations.GetDomesticPaymentsDomesticPaymentIDPaymentDetailsResponse:
        r"""Get Payment Details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/domestic-payments/{DomesticPaymentId}/payment-details", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDomesticPaymentsDomesticPaymentIDPaymentDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWritePaymentDetailsResponse1])
                res.ob_write_payment_details_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWritePaymentDetailsResponse1])
                res.ob_write_payment_details_response1 = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 401:
            res.headers = r.headers
            
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 404:
            res.headers = r.headers
            
        elif r.status_code == 405:
            res.headers = r.headers
            
        elif r.status_code == 406:
            res.headers = r.headers
            
        elif r.status_code == 429:
            res.headers = r.headers
            
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out

        return res

    
    def get_domestic_scheduled_payment_consents_consent_id(self, request: operations.GetDomesticScheduledPaymentConsentsConsentIDRequest) -> operations.GetDomesticScheduledPaymentConsentsConsentIDResponse:
        r"""Get Domestic Scheduled Payment Consents
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/domestic-scheduled-payment-consents/{ConsentId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDomesticScheduledPaymentConsentsConsentIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteDomesticScheduledConsentResponse5])
                res.ob_write_domestic_scheduled_consent_response5 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteDomesticScheduledConsentResponse5])
                res.ob_write_domestic_scheduled_consent_response5 = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 401:
            res.headers = r.headers
            
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 404:
            res.headers = r.headers
            
        elif r.status_code == 405:
            res.headers = r.headers
            
        elif r.status_code == 406:
            res.headers = r.headers
            
        elif r.status_code == 429:
            res.headers = r.headers
            
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out

        return res

    
    def get_domestic_scheduled_payments_domestic_scheduled_payment_id(self, request: operations.GetDomesticScheduledPaymentsDomesticScheduledPaymentIDRequest) -> operations.GetDomesticScheduledPaymentsDomesticScheduledPaymentIDResponse:
        r"""Get Domestic Scheduled Payments
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/domestic-scheduled-payments/{DomesticScheduledPaymentId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDomesticScheduledPaymentsDomesticScheduledPaymentIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteDomesticScheduledResponse5])
                res.ob_write_domestic_scheduled_response5 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteDomesticScheduledResponse5])
                res.ob_write_domestic_scheduled_response5 = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 401:
            res.headers = r.headers
            
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 404:
            res.headers = r.headers
            
        elif r.status_code == 405:
            res.headers = r.headers
            
        elif r.status_code == 406:
            res.headers = r.headers
            
        elif r.status_code == 429:
            res.headers = r.headers
            
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out

        return res

    
    def get_domestic_scheduled_payments_domestic_scheduled_payment_id_payment_details(self, request: operations.GetDomesticScheduledPaymentsDomesticScheduledPaymentIDPaymentDetailsRequest) -> operations.GetDomesticScheduledPaymentsDomesticScheduledPaymentIDPaymentDetailsResponse:
        r"""Get Payment Details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/domestic-scheduled-payments/{DomesticScheduledPaymentId}/payment-details", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDomesticScheduledPaymentsDomesticScheduledPaymentIDPaymentDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWritePaymentDetailsResponse1])
                res.ob_write_payment_details_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWritePaymentDetailsResponse1])
                res.ob_write_payment_details_response1 = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 401:
            res.headers = r.headers
            
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 404:
            res.headers = r.headers
            
        elif r.status_code == 405:
            res.headers = r.headers
            
        elif r.status_code == 406:
            res.headers = r.headers
            
        elif r.status_code == 429:
            res.headers = r.headers
            
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out

        return res

    
    def get_domestic_standing_order_consents_consent_id(self, request: operations.GetDomesticStandingOrderConsentsConsentIDRequest) -> operations.GetDomesticStandingOrderConsentsConsentIDResponse:
        r"""Get Domestic Standing Order Consents
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/domestic-standing-order-consents/{ConsentId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDomesticStandingOrderConsentsConsentIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteDomesticStandingOrderConsentResponse6])
                res.ob_write_domestic_standing_order_consent_response6 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteDomesticStandingOrderConsentResponse6])
                res.ob_write_domestic_standing_order_consent_response6 = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 401:
            res.headers = r.headers
            
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 404:
            res.headers = r.headers
            
        elif r.status_code == 405:
            res.headers = r.headers
            
        elif r.status_code == 406:
            res.headers = r.headers
            
        elif r.status_code == 429:
            res.headers = r.headers
            
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out

        return res

    
    def get_domestic_standing_orders_domestic_standing_order_id(self, request: operations.GetDomesticStandingOrdersDomesticStandingOrderIDRequest) -> operations.GetDomesticStandingOrdersDomesticStandingOrderIDResponse:
        r"""Get Domestic Standing Orders
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/domestic-standing-orders/{DomesticStandingOrderId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDomesticStandingOrdersDomesticStandingOrderIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteDomesticStandingOrderResponse6])
                res.ob_write_domestic_standing_order_response6 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteDomesticStandingOrderResponse6])
                res.ob_write_domestic_standing_order_response6 = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 401:
            res.headers = r.headers
            
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 404:
            res.headers = r.headers
            
        elif r.status_code == 405:
            res.headers = r.headers
            
        elif r.status_code == 406:
            res.headers = r.headers
            
        elif r.status_code == 429:
            res.headers = r.headers
            
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out

        return res

    
    def get_domestic_standing_orders_domestic_standing_order_id_payment_details(self, request: operations.GetDomesticStandingOrdersDomesticStandingOrderIDPaymentDetailsRequest) -> operations.GetDomesticStandingOrdersDomesticStandingOrderIDPaymentDetailsResponse:
        r"""Get Payment Details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/domestic-standing-orders/{DomesticStandingOrderId}/payment-details", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetDomesticStandingOrdersDomesticStandingOrderIDPaymentDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWritePaymentDetailsResponse1])
                res.ob_write_payment_details_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWritePaymentDetailsResponse1])
                res.ob_write_payment_details_response1 = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 401:
            res.headers = r.headers
            
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 404:
            res.headers = r.headers
            
        elif r.status_code == 405:
            res.headers = r.headers
            
        elif r.status_code == 406:
            res.headers = r.headers
            
        elif r.status_code == 429:
            res.headers = r.headers
            
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out

        return res

    
    def get_file_payment_consents_consent_id(self, request: operations.GetFilePaymentConsentsConsentIDRequest) -> operations.GetFilePaymentConsentsConsentIDResponse:
        r"""Get File Payment Consents
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/file-payment-consents/{ConsentId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFilePaymentConsentsConsentIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteFileConsentResponse4])
                res.ob_write_file_consent_response4 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteFileConsentResponse4])
                res.ob_write_file_consent_response4 = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 401:
            res.headers = r.headers
            
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 404:
            res.headers = r.headers
            
        elif r.status_code == 405:
            res.headers = r.headers
            
        elif r.status_code == 406:
            res.headers = r.headers
            
        elif r.status_code == 429:
            res.headers = r.headers
            
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out

        return res

    
    def get_file_payment_consents_consent_id_file(self, request: operations.GetFilePaymentConsentsConsentIDFileRequest) -> operations.GetFilePaymentConsentsConsentIDFileResponse:
        r"""Get File Payment Consents
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/file-payment-consents/{ConsentId}/file", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFilePaymentConsentsConsentIDFileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.file = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.file = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 401:
            res.headers = r.headers
            
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 404:
            res.headers = r.headers
            
        elif r.status_code == 405:
            res.headers = r.headers
            
        elif r.status_code == 406:
            res.headers = r.headers
            
        elif r.status_code == 429:
            res.headers = r.headers
            
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out

        return res

    
    def get_file_payments_file_payment_id(self, request: operations.GetFilePaymentsFilePaymentIDRequest) -> operations.GetFilePaymentsFilePaymentIDResponse:
        r"""Get File Payments
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/file-payments/{FilePaymentId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFilePaymentsFilePaymentIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteFileResponse3])
                res.ob_write_file_response3 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteFileResponse3])
                res.ob_write_file_response3 = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 401:
            res.headers = r.headers
            
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 404:
            res.headers = r.headers
            
        elif r.status_code == 405:
            res.headers = r.headers
            
        elif r.status_code == 406:
            res.headers = r.headers
            
        elif r.status_code == 429:
            res.headers = r.headers
            
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out

        return res

    
    def get_file_payments_file_payment_id_payment_details(self, request: operations.GetFilePaymentsFilePaymentIDPaymentDetailsRequest) -> operations.GetFilePaymentsFilePaymentIDPaymentDetailsResponse:
        r"""Get Payment Details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/file-payments/{FilePaymentId}/payment-details", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFilePaymentsFilePaymentIDPaymentDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWritePaymentDetailsResponse1])
                res.ob_write_payment_details_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWritePaymentDetailsResponse1])
                res.ob_write_payment_details_response1 = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 401:
            res.headers = r.headers
            
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 404:
            res.headers = r.headers
            
        elif r.status_code == 405:
            res.headers = r.headers
            
        elif r.status_code == 406:
            res.headers = r.headers
            
        elif r.status_code == 429:
            res.headers = r.headers
            
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out

        return res

    
    def get_file_payments_file_payment_id_report_file(self, request: operations.GetFilePaymentsFilePaymentIDReportFileRequest) -> operations.GetFilePaymentsFilePaymentIDReportFileResponse:
        r"""Get File Payments
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/file-payments/{FilePaymentId}/report-file", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetFilePaymentsFilePaymentIDReportFileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.file = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.file = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 401:
            res.headers = r.headers
            
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 404:
            res.headers = r.headers
            
        elif r.status_code == 405:
            res.headers = r.headers
            
        elif r.status_code == 406:
            res.headers = r.headers
            
        elif r.status_code == 429:
            res.headers = r.headers
            
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out

        return res

    
    def get_international_payment_consents_consent_id(self, request: operations.GetInternationalPaymentConsentsConsentIDRequest) -> operations.GetInternationalPaymentConsentsConsentIDResponse:
        r"""Get International Payment Consents
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/international-payment-consents/{ConsentId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInternationalPaymentConsentsConsentIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteInternationalConsentResponse6])
                res.ob_write_international_consent_response6 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteInternationalConsentResponse6])
                res.ob_write_international_consent_response6 = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 401:
            res.headers = r.headers
            
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 404:
            res.headers = r.headers
            
        elif r.status_code == 405:
            res.headers = r.headers
            
        elif r.status_code == 406:
            res.headers = r.headers
            
        elif r.status_code == 429:
            res.headers = r.headers
            
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out

        return res

    
    def get_international_payment_consents_consent_id_funds_confirmation(self, request: operations.GetInternationalPaymentConsentsConsentIDFundsConfirmationRequest) -> operations.GetInternationalPaymentConsentsConsentIDFundsConfirmationResponse:
        r"""Get International Payment Consents Funds Confirmation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/international-payment-consents/{ConsentId}/funds-confirmation", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInternationalPaymentConsentsConsentIDFundsConfirmationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteFundsConfirmationResponse1])
                res.ob_write_funds_confirmation_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteFundsConfirmationResponse1])
                res.ob_write_funds_confirmation_response1 = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 401:
            res.headers = r.headers
            
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 404:
            res.headers = r.headers
            
        elif r.status_code == 405:
            res.headers = r.headers
            
        elif r.status_code == 406:
            res.headers = r.headers
            
        elif r.status_code == 429:
            res.headers = r.headers
            
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out

        return res

    
    def get_international_payments_international_payment_id(self, request: operations.GetInternationalPaymentsInternationalPaymentIDRequest) -> operations.GetInternationalPaymentsInternationalPaymentIDResponse:
        r"""Get International Payments
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/international-payments/{InternationalPaymentId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInternationalPaymentsInternationalPaymentIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteInternationalResponse5])
                res.ob_write_international_response5 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteInternationalResponse5])
                res.ob_write_international_response5 = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 401:
            res.headers = r.headers
            
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 404:
            res.headers = r.headers
            
        elif r.status_code == 405:
            res.headers = r.headers
            
        elif r.status_code == 406:
            res.headers = r.headers
            
        elif r.status_code == 429:
            res.headers = r.headers
            
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out

        return res

    
    def get_international_payments_international_payment_id_payment_details(self, request: operations.GetInternationalPaymentsInternationalPaymentIDPaymentDetailsRequest) -> operations.GetInternationalPaymentsInternationalPaymentIDPaymentDetailsResponse:
        r"""Get Payment Details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/international-payments/{InternationalPaymentId}/payment-details", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInternationalPaymentsInternationalPaymentIDPaymentDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWritePaymentDetailsResponse1])
                res.ob_write_payment_details_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWritePaymentDetailsResponse1])
                res.ob_write_payment_details_response1 = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 401:
            res.headers = r.headers
            
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 404:
            res.headers = r.headers
            
        elif r.status_code == 405:
            res.headers = r.headers
            
        elif r.status_code == 406:
            res.headers = r.headers
            
        elif r.status_code == 429:
            res.headers = r.headers
            
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out

        return res

    
    def get_international_scheduled_payment_consents_consent_id(self, request: operations.GetInternationalScheduledPaymentConsentsConsentIDRequest) -> operations.GetInternationalScheduledPaymentConsentsConsentIDResponse:
        r"""Get International Scheduled Payment Consents
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/international-scheduled-payment-consents/{ConsentId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInternationalScheduledPaymentConsentsConsentIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteInternationalScheduledConsentResponse6])
                res.ob_write_international_scheduled_consent_response6 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteInternationalScheduledConsentResponse6])
                res.ob_write_international_scheduled_consent_response6 = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 401:
            res.headers = r.headers
            
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 404:
            res.headers = r.headers
            
        elif r.status_code == 405:
            res.headers = r.headers
            
        elif r.status_code == 406:
            res.headers = r.headers
            
        elif r.status_code == 429:
            res.headers = r.headers
            
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out

        return res

    
    def get_international_scheduled_payment_consents_consent_id_funds_confirmation(self, request: operations.GetInternationalScheduledPaymentConsentsConsentIDFundsConfirmationRequest) -> operations.GetInternationalScheduledPaymentConsentsConsentIDFundsConfirmationResponse:
        r"""Get International Scheduled Payment Consents Funds Confirmation
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/international-scheduled-payment-consents/{ConsentId}/funds-confirmation", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInternationalScheduledPaymentConsentsConsentIDFundsConfirmationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteFundsConfirmationResponse1])
                res.ob_write_funds_confirmation_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteFundsConfirmationResponse1])
                res.ob_write_funds_confirmation_response1 = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 401:
            res.headers = r.headers
            
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 404:
            res.headers = r.headers
            
        elif r.status_code == 405:
            res.headers = r.headers
            
        elif r.status_code == 406:
            res.headers = r.headers
            
        elif r.status_code == 429:
            res.headers = r.headers
            
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out

        return res

    
    def get_international_scheduled_payments_international_scheduled_payment_id(self, request: operations.GetInternationalScheduledPaymentsInternationalScheduledPaymentIDRequest) -> operations.GetInternationalScheduledPaymentsInternationalScheduledPaymentIDResponse:
        r"""Get International Scheduled Payments
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/international-scheduled-payments/{InternationalScheduledPaymentId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInternationalScheduledPaymentsInternationalScheduledPaymentIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteInternationalScheduledResponse6])
                res.ob_write_international_scheduled_response6 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteInternationalScheduledResponse6])
                res.ob_write_international_scheduled_response6 = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 401:
            res.headers = r.headers
            
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 404:
            res.headers = r.headers
            
        elif r.status_code == 405:
            res.headers = r.headers
            
        elif r.status_code == 406:
            res.headers = r.headers
            
        elif r.status_code == 429:
            res.headers = r.headers
            
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out

        return res

    
    def get_international_scheduled_payments_international_scheduled_payment_id_payment_details(self, request: operations.GetInternationalScheduledPaymentsInternationalScheduledPaymentIDPaymentDetailsRequest) -> operations.GetInternationalScheduledPaymentsInternationalScheduledPaymentIDPaymentDetailsResponse:
        r"""Get Payment Details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/international-scheduled-payments/{InternationalScheduledPaymentId}/payment-details", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInternationalScheduledPaymentsInternationalScheduledPaymentIDPaymentDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWritePaymentDetailsResponse1])
                res.ob_write_payment_details_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWritePaymentDetailsResponse1])
                res.ob_write_payment_details_response1 = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 401:
            res.headers = r.headers
            
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 404:
            res.headers = r.headers
            
        elif r.status_code == 405:
            res.headers = r.headers
            
        elif r.status_code == 406:
            res.headers = r.headers
            
        elif r.status_code == 429:
            res.headers = r.headers
            
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out

        return res

    
    def get_international_standing_order_consents_consent_id(self, request: operations.GetInternationalStandingOrderConsentsConsentIDRequest) -> operations.GetInternationalStandingOrderConsentsConsentIDResponse:
        r"""Get International Standing Order Consents
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/international-standing-order-consents/{ConsentId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInternationalStandingOrderConsentsConsentIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteInternationalStandingOrderConsentResponse7])
                res.ob_write_international_standing_order_consent_response7 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteInternationalStandingOrderConsentResponse7])
                res.ob_write_international_standing_order_consent_response7 = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 401:
            res.headers = r.headers
            
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 404:
            res.headers = r.headers
            
        elif r.status_code == 405:
            res.headers = r.headers
            
        elif r.status_code == 406:
            res.headers = r.headers
            
        elif r.status_code == 429:
            res.headers = r.headers
            
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out

        return res

    
    def get_international_standing_orders_international_standing_order_payment_id(self, request: operations.GetInternationalStandingOrdersInternationalStandingOrderPaymentIDRequest) -> operations.GetInternationalStandingOrdersInternationalStandingOrderPaymentIDResponse:
        r"""Get International Standing Orders
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/international-standing-orders/{InternationalStandingOrderPaymentId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInternationalStandingOrdersInternationalStandingOrderPaymentIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteInternationalStandingOrderResponse7])
                res.ob_write_international_standing_order_response7 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWriteInternationalStandingOrderResponse7])
                res.ob_write_international_standing_order_response7 = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 401:
            res.headers = r.headers
            
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 404:
            res.headers = r.headers
            
        elif r.status_code == 405:
            res.headers = r.headers
            
        elif r.status_code == 406:
            res.headers = r.headers
            
        elif r.status_code == 429:
            res.headers = r.headers
            
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out

        return res

    
    def get_international_standing_orders_international_standing_order_payment_id_payment_details(self, request: operations.GetInternationalStandingOrdersInternationalStandingOrderPaymentIDPaymentDetailsRequest) -> operations.GetInternationalStandingOrdersInternationalStandingOrderPaymentIDPaymentDetailsResponse:
        r"""Get Payment Details
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/international-standing-orders/{InternationalStandingOrderPaymentId}/payment-details", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetInternationalStandingOrdersInternationalStandingOrderPaymentIDPaymentDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWritePaymentDetailsResponse1])
                res.ob_write_payment_details_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObWritePaymentDetailsResponse1])
                res.ob_write_payment_details_response1 = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 401:
            res.headers = r.headers
            
        elif r.status_code == 403:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
        elif r.status_code == 404:
            res.headers = r.headers
            
        elif r.status_code == 405:
            res.headers = r.headers
            
        elif r.status_code == 406:
            res.headers = r.headers
            
        elif r.status_code == 429:
            res.headers = r.headers
            
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/jose+jwe"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ObErrorResponse1])
                res.ob_error_response1 = out

        return res

    