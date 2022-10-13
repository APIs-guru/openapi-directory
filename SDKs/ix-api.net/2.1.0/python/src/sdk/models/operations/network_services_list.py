from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared

class NetworkServicesListTypeEnum(str, Enum):
    EXCHANGE_LAN = "exchange_lan"
    P2P_VC = "p2p_vc"
    P2MP_VC = "p2mp_vc"
    MP2MP_VC = "mp2mp_vc"
    CLOUD_VC = "cloud_vc"


@dataclass
class NetworkServicesListQueryParams:
    consuming_account: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'consuming_account', 'style': 'form', 'explode': True }})
    external_ref: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'external_ref', 'style': 'form', 'explode': True }})
    id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': False }})
    managing_account: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'managing_account', 'style': 'form', 'explode': True }})
    pop: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pop', 'style': 'form', 'explode': True }})
    product_offering: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'product_offering', 'style': 'form', 'explode': True }})
    state: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'state', 'style': 'form', 'explode': True }})
    state_is_not: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'state__is_not', 'style': 'form', 'explode': True }})
    type: Optional[NetworkServicesListTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'type', 'style': 'form', 'explode': True }})
    

@dataclass
class NetworkServicesListRequest:
    query_params: NetworkServicesListQueryParams = field(default=None)
    
class NetworkServicesList400ApplicationJSONTypeEnum(str, Enum):
    HTTPS_ERRORS_IX_API_NET_V2_VALIDATION_ERROR_HTML = "https://errors.ix-api.net/v2/validation-error.html"


@dataclass_json
@dataclass
class NetworkServicesList400ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    status: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: NetworkServicesList400ApplicationJSONTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class NetworkServicesList401ApplicationJSONTypeEnum(str, Enum):
    HTTPS_ERRORS_IX_API_NET_V2_AUTHENTICATION_ERROR_HTML = "https://errors.ix-api.net/v2/authentication-error.html"
    HTTPS_ERRORS_IX_API_NET_V2_SIGNATURE_EXPIRED_HTML = "https://errors.ix-api.net/v2/signature-expired.html"


@dataclass_json
@dataclass
class NetworkServicesList401ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    status: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: NetworkServicesList401ApplicationJSONTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class NetworkServicesList403ApplicationJSONTypeEnum(str, Enum):
    HTTPS_ERRORS_IX_API_NET_V2_PERMISSION_DENIED_HTML = "https://errors.ix-api.net/v2/permission-denied.html"


@dataclass_json
@dataclass
class NetworkServicesList403ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    status: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: NetworkServicesList403ApplicationJSONTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class NetworkServicesListResponse:
    content_type: str = field(default=None)
    network_services: Optional[List[Any]] = field(default=None)
    status_code: int = field(default=None)
    network_services_list_400_application_json_object: Optional[NetworkServicesList400ApplicationJSON] = field(default=None)
    network_services_list_401_application_json_object: Optional[NetworkServicesList401ApplicationJSON] = field(default=None)
    network_services_list_403_application_json_object: Optional[NetworkServicesList403ApplicationJSON] = field(default=None)
    
