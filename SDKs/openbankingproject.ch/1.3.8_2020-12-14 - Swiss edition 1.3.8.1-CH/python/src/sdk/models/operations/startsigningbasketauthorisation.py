from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class StartSigningBasketAuthorisationPathParams:
    basket_id: str = field(metadata={'path_param': { 'field_name': 'basketId', 'style': 'simple', 'explode': False }})
    

@dataclass
class StartSigningBasketAuthorisationHeaders:
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
    tpp_nok_redirect_uri: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'TPP-Nok-Redirect-URI', 'style': 'simple', 'explode': False }})
    tpp_notification_content_preferred: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'TPP-Notification-Content-Preferred', 'style': 'simple', 'explode': False }})
    tpp_notification_uri: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'TPP-Notification-URI', 'style': 'simple', 'explode': False }})
    tpp_redirect_preferred: Optional[bool] = field(default=None, metadata={'header': { 'field_name': 'TPP-Redirect-Preferred', 'style': 'simple', 'explode': False }})
    tpp_redirect_uri: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'TPP-Redirect-URI', 'style': 'simple', 'explode': False }})
    tpp_signature_certificate: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'TPP-Signature-Certificate', 'style': 'simple', 'explode': False }})
    

@dataclass
class StartSigningBasketAuthorisationSecurity:
    bearer_auth_o_auth: Optional[shared.SchemeBearerAuthOAuth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class StartSigningBasketAuthorisationRequest:
    headers: StartSigningBasketAuthorisationHeaders = field()
    path_params: StartSigningBasketAuthorisationPathParams = field()
    security: StartSigningBasketAuthorisationSecurity = field()
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class StartSigningBasketAuthorisationResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    error400_ng_sbs: Optional[shared.Error400NgSbs] = field(default=None)
    error400_sbs: Optional[shared.Error400Sbs] = field(default=None)
    error401_ng_sbs: Optional[shared.Error401NgSbs] = field(default=None)
    error401_sbs: Optional[shared.Error401Sbs] = field(default=None)
    error403_ng_sbs: Optional[shared.Error403NgSbs] = field(default=None)
    error403_sbs: Optional[shared.Error403Sbs] = field(default=None)
    error404_ng_sbs: Optional[shared.Error404NgSbs] = field(default=None)
    error404_sbs: Optional[shared.Error404Sbs] = field(default=None)
    error405_ng_sbs: Optional[shared.Error405NgSbs] = field(default=None)
    error405_sbs: Optional[shared.Error405Sbs] = field(default=None)
    error409_ng_sbs: Optional[shared.Error409NgSbs] = field(default=None)
    error409_sbs: Optional[shared.Error409Sbs] = field(default=None)
    start_scaprocess_response: Optional[shared.StartScaprocessResponse] = field(default=None)
    
