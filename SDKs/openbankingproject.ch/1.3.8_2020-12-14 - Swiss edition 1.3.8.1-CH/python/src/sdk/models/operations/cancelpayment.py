from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class CancelPaymentPathParams:
    payment_product: shared.PaymentProductEnum = field(default=None, metadata={'path_param': { 'field_name': 'payment-product', 'style': 'simple', 'explode': False }})
    payment_service: shared.PaymentServiceEnum = field(default=None, metadata={'path_param': { 'field_name': 'payment-service', 'style': 'simple', 'explode': False }})
    payment_id: str = field(default=None, metadata={'path_param': { 'field_name': 'paymentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class CancelPaymentHeaders:
    digest: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Digest' }})
    psu_accept: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'PSU-Accept' }})
    psu_accept_charset: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'PSU-Accept-Charset' }})
    psu_accept_encoding: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'PSU-Accept-Encoding' }})
    psu_accept_language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'PSU-Accept-Language' }})
    psu_device_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'PSU-Device-ID' }})
    psu_geo_location: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'PSU-Geo-Location' }})
    psu_http_method: Optional[shared.PsuHTTPMethodEnum] = field(default=None, metadata={'header': { 'field_name': 'PSU-Http-Method' }})
    psu_ip_address: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'PSU-IP-Address' }})
    psu_ip_port: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'PSU-IP-Port' }})
    psu_user_agent: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'PSU-User-Agent' }})
    signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Signature' }})
    tpp_explicit_authorisation_preferred: Optional[bool] = field(default=None, metadata={'header': { 'field_name': 'TPP-Explicit-Authorisation-Preferred' }})
    tpp_nok_redirect_uri: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'TPP-Nok-Redirect-URI' }})
    tpp_redirect_preferred: Optional[bool] = field(default=None, metadata={'header': { 'field_name': 'TPP-Redirect-Preferred' }})
    tpp_redirect_uri: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'TPP-Redirect-URI' }})
    tpp_signature_certificate: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'TPP-Signature-Certificate' }})
    x_request_id: str = field(default=None, metadata={'header': { 'field_name': 'X-Request-ID' }})
    

@dataclass
class CancelPaymentSecurity:
    bearer_auth_o_auth: Optional[shared.SchemeBearerAuthOAuth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class CancelPaymentRequest:
    path_params: CancelPaymentPathParams = field(default=None)
    headers: CancelPaymentHeaders = field(default=None)
    security: CancelPaymentSecurity = field(default=None)
    

@dataclass
class CancelPaymentResponse:
    content_type: str = field(default=None)
    error400_ng_pis: Optional[shared.Error400NgPis] = field(default=None)
    error400_pis: Optional[shared.Error400Pis] = field(default=None)
    error401_ng_pis: Optional[shared.Error401NgPis] = field(default=None)
    error401_pis: Optional[shared.Error401Pis] = field(default=None)
    error403_ng_pis: Optional[shared.Error403NgPis] = field(default=None)
    error403_pis: Optional[shared.Error403Pis] = field(default=None)
    error404_ng_pis: Optional[shared.Error404NgPis] = field(default=None)
    error404_pis: Optional[shared.Error404Pis] = field(default=None)
    error405_ng_pis_canc: Optional[shared.Error405NgPisCanc] = field(default=None)
    error405_pis_canc: Optional[shared.Error405PisCanc] = field(default=None)
    error409_ng_pis: Optional[shared.Error409NgPis] = field(default=None)
    error409_pis: Optional[shared.Error409Pis] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    payment_initiation_cancel_response_202: Optional[shared.PaymentInitiationCancelResponse202] = field(default=None)
    
