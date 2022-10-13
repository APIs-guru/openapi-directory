from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ReadAccountDetailsPathParams:
    account_id: str = field(default=None, metadata={'path_param': { 'field_name': 'account-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReadAccountDetailsQueryParams:
    with_balance: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'withBalance', 'style': 'form', 'explode': True }})
    

@dataclass
class ReadAccountDetailsHeaders:
    consent_id: str = field(default=None, metadata={'header': { 'field_name': 'Consent-ID' }})
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
    tpp_signature_certificate: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'TPP-Signature-Certificate' }})
    x_request_id: str = field(default=None, metadata={'header': { 'field_name': 'X-Request-ID' }})
    

@dataclass
class ReadAccountDetailsSecurity:
    bearer_auth_o_auth: Optional[shared.SchemeBearerAuthOAuth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class ReadAccountDetailsRequest:
    path_params: ReadAccountDetailsPathParams = field(default=None)
    query_params: ReadAccountDetailsQueryParams = field(default=None)
    headers: ReadAccountDetailsHeaders = field(default=None)
    security: ReadAccountDetailsSecurity = field(default=None)
    

@dataclass_json
@dataclass
class ReadAccountDetails200ApplicationJSON:
    account: shared.AccountDetails = field(default=None, metadata={'dataclasses_json': { 'field_name': 'account' }})
    

@dataclass
class ReadAccountDetailsResponse:
    content_type: str = field(default=None)
    error400_ais: Optional[shared.Error400Ais] = field(default=None)
    error400_ng_ais: Optional[shared.Error400NgAis] = field(default=None)
    error401_ais: Optional[shared.Error401Ais] = field(default=None)
    error401_ng_ais: Optional[shared.Error401NgAis] = field(default=None)
    error403_ais: Optional[shared.Error403Ais] = field(default=None)
    error403_ng_ais: Optional[shared.Error403NgAis] = field(default=None)
    error404_ais: Optional[shared.Error404Ais] = field(default=None)
    error404_ng_ais: Optional[shared.Error404NgAis] = field(default=None)
    error405_ais: Optional[shared.Error405Ais] = field(default=None)
    error405_ng_ais: Optional[shared.Error405NgAis] = field(default=None)
    error406_ais: Optional[shared.Error406Ais] = field(default=None)
    error406_ng_ais: Optional[shared.Error406NgAis] = field(default=None)
    error409_ais: Optional[shared.Error409Ais] = field(default=None)
    error409_ng_ais: Optional[shared.Error409NgAis] = field(default=None)
    error429_ais: Optional[shared.Error429Ais] = field(default=None)
    error429_ng_ais: Optional[shared.Error429NgAis] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    read_account_details_200_application_json_object: Optional[ReadAccountDetails200ApplicationJSON] = field(default=None)
    
