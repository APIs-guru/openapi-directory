from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class UpdatePaymentPsuDataPathParams:
    authorisation_id: str = field(metadata={'path_param': { 'field_name': 'authorisationId', 'style': 'simple', 'explode': False }})
    payment_product: shared.PaymentProductEnum = field(metadata={'path_param': { 'field_name': 'payment-product', 'style': 'simple', 'explode': False }})
    payment_service: shared.PaymentServiceEnum = field(metadata={'path_param': { 'field_name': 'payment-service', 'style': 'simple', 'explode': False }})
    payment_id: str = field(metadata={'path_param': { 'field_name': 'paymentId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdatePaymentPsuDataHeaders:
    x_request_id: str = field(metadata={'header': { 'field_name': 'X-Request-ID', 'style': 'simple', 'explode': False }})
    digest: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Digest', 'style': 'simple', 'explode': False }})
    psu_accept: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'PSU-Accept', 'style': 'simple', 'explode': False }})
    psu_accept_charset: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'PSU-Accept-Charset', 'style': 'simple', 'explode': False }})
    psu_accept_encoding: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'PSU-Accept-Encoding', 'style': 'simple', 'explode': False }})
    psu_accept_language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'PSU-Accept-Language', 'style': 'simple', 'explode': False }})
    psu_corporate_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'PSU-Corporate-ID', 'style': 'simple', 'explode': False }})
    psu_corporate_id_type: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'PSU-Corporate-ID-Type', 'style': 'simple', 'explode': False }})
    psu_device_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'PSU-Device-ID', 'style': 'simple', 'explode': False }})
    psu_geo_location: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'PSU-Geo-Location', 'style': 'simple', 'explode': False }})
    psu_http_method: Optional[shared.PsuHTTPMethodEnum] = field(default=None, metadata={'header': { 'field_name': 'PSU-Http-Method', 'style': 'simple', 'explode': False }})
    psu_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'PSU-ID', 'style': 'simple', 'explode': False }})
    psu_id_type: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'PSU-ID-Type', 'style': 'simple', 'explode': False }})
    psu_ip_address: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'PSU-IP-Address', 'style': 'simple', 'explode': False }})
    psu_ip_port: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'PSU-IP-Port', 'style': 'simple', 'explode': False }})
    psu_user_agent: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'PSU-User-Agent', 'style': 'simple', 'explode': False }})
    signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Signature', 'style': 'simple', 'explode': False }})
    tpp_signature_certificate: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'TPP-Signature-Certificate', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdatePaymentPsuDataSecurity:
    bearer_auth_o_auth: Optional[shared.SchemeBearerAuthOAuth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class UpdatePaymentPsuDataRequest:
    headers: UpdatePaymentPsuDataHeaders = field()
    path_params: UpdatePaymentPsuDataPathParams = field()
    security: UpdatePaymentPsuDataSecurity = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class UpdatePaymentPsuDataResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    error400_ng_pis: Optional[shared.Error400NgPis] = field(default=None)
    error400_pis: Optional[shared.Error400Pis] = field(default=None)
    error401_ng_pis: Optional[shared.Error401NgPis] = field(default=None)
    error401_pis: Optional[shared.Error401Pis] = field(default=None)
    error403_ng_pis: Optional[shared.Error403NgPis] = field(default=None)
    error403_pis: Optional[shared.Error403Pis] = field(default=None)
    error404_ng_pis: Optional[shared.Error404NgPis] = field(default=None)
    error404_pis: Optional[shared.Error404Pis] = field(default=None)
    error405_ng_pis: Optional[shared.Error405NgPis] = field(default=None)
    error405_pis: Optional[shared.Error405Pis] = field(default=None)
    error409_ng_pis: Optional[shared.Error409NgPis] = field(default=None)
    error409_pis: Optional[shared.Error409Pis] = field(default=None)
    update_payment_psu_data_200_application_json_one_of: Optional[Any] = field(default=None)
    
