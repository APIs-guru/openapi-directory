from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,List,Optional
from sdk.models import shared


@dataclass
class GetTransactionListPathParams:
    account_id: str = field(default=None, metadata={'path_param': { 'field_name': 'account-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTransactionListQueryParams:
    booking_status: shared.BookingStatusEnum = field(default=None, metadata={'query_param': { 'field_name': 'bookingStatus', 'style': 'form', 'explode': True }})
    date_from: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'dateFrom', 'style': 'form', 'explode': True }})
    date_to: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'dateTo', 'style': 'form', 'explode': True }})
    delta_list: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'deltaList', 'style': 'form', 'explode': True }})
    entry_reference_from: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'entryReferenceFrom', 'style': 'form', 'explode': True }})
    with_balance: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'withBalance', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTransactionListHeaders:
    consent_id: str = field(default=None, metadata={'header': { 'field_name': 'Consent-ID', 'style': 'simple', 'explode': False }})
    digest: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Digest', 'style': 'simple', 'explode': False }})
    psu_accept: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'PSU-Accept', 'style': 'simple', 'explode': False }})
    psu_accept_charset: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'PSU-Accept-Charset', 'style': 'simple', 'explode': False }})
    psu_accept_encoding: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'PSU-Accept-Encoding', 'style': 'simple', 'explode': False }})
    psu_accept_language: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'PSU-Accept-Language', 'style': 'simple', 'explode': False }})
    psu_device_id: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'PSU-Device-ID', 'style': 'simple', 'explode': False }})
    psu_geo_location: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'PSU-Geo-Location', 'style': 'simple', 'explode': False }})
    psu_http_method: Optional[shared.PsuHTTPMethodEnum] = field(default=None, metadata={'header': { 'field_name': 'PSU-Http-Method', 'style': 'simple', 'explode': False }})
    psu_ip_address: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'PSU-IP-Address', 'style': 'simple', 'explode': False }})
    psu_ip_port: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'PSU-IP-Port', 'style': 'simple', 'explode': False }})
    psu_user_agent: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'PSU-User-Agent', 'style': 'simple', 'explode': False }})
    signature: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Signature', 'style': 'simple', 'explode': False }})
    tpp_signature_certificate: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'TPP-Signature-Certificate', 'style': 'simple', 'explode': False }})
    x_request_id: str = field(default=None, metadata={'header': { 'field_name': 'X-Request-ID', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTransactionListSecurity:
    bearer_auth_o_auth: Optional[shared.SchemeBearerAuthOAuth] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetTransactionListRequest:
    path_params: GetTransactionListPathParams = field(default=None)
    query_params: GetTransactionListQueryParams = field(default=None)
    headers: GetTransactionListHeaders = field(default=None)
    security: GetTransactionListSecurity = field(default=None)
    

@dataclass
class GetTransactionListResponse:
    body: bytes = field(default=None)
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
    transactions_response_200_json: Optional[shared.TransactionsResponse200JSON] = field(default=None)
    
