from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class StartSigningBasketAuthorisationPathParams:
    basket_id: str = field(default=None, metadata={'path_param': { 'field_name': 'basketId', 'style': 'simple', 'explode': False }})
    

@dataclass
class StartSigningBasketAuthorisationHeaders:
    digest: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Digest' }})
    psu_accept: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'PSU-Accept' }})
    psu_accept_charset: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'PSU-Accept-Charset' }})
    psu_accept_encoding: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'PSU-Accept-Encoding' }})
    psu_accept_language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'PSU-Accept-Language' }})
    psu_corporate_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'PSU-Corporate-ID' }})
    psu_corporate_id_type: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'PSU-Corporate-ID-Type' }})
    psu_device_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'PSU-Device-ID' }})
    psu_geo_location: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'PSU-Geo-Location' }})
    psu_http_method: Optional[shared.PsuHTTPMethodEnum] = field(default=None, metadata={'header': { 'field_name': 'PSU-Http-Method' }})
    psu_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'PSU-ID' }})
    psu_id_type: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'PSU-ID-Type' }})
    psu_ip_address: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'PSU-IP-Address' }})
    psu_ip_port: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'PSU-IP-Port' }})
    psu_user_agent: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'PSU-User-Agent' }})
    signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Signature' }})
    tpp_nok_redirect_uri: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'TPP-Nok-Redirect-URI' }})
    tpp_notification_content_preferred: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'TPP-Notification-Content-Preferred' }})
    tpp_notification_uri: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'TPP-Notification-URI' }})
    tpp_redirect_preferred: Optional[bool] = field(default=None, metadata={'header': { 'field_name': 'TPP-Redirect-Preferred' }})
    tpp_redirect_uri: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'TPP-Redirect-URI' }})
    tpp_signature_certificate: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'TPP-Signature-Certificate' }})
    x_request_id: str = field(default=None, metadata={'header': { 'field_name': 'X-Request-ID' }})
    

@dataclass
class StartSigningBasketAuthorisationSecurity:
    bearer_auth_o_auth: Optional[shared.SchemeBearerAuthOAuth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class StartSigningBasketAuthorisationRequest:
    path_params: StartSigningBasketAuthorisationPathParams = field(default=None)
    headers: StartSigningBasketAuthorisationHeaders = field(default=None)
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: StartSigningBasketAuthorisationSecurity = field(default=None)
    

@dataclass
class StartSigningBasketAuthorisationResponse:
    content_type: str = field(default=None)
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
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    start_scaprocess_response: Optional[shared.StartScaprocessResponse] = field(default=None)
    
