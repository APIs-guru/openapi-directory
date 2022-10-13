from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class DevicesListQueryParams:
    capability_media_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'capability_media_type', 'style': 'form', 'explode': True }})
    capability_speed: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'capability_speed', 'style': 'form', 'explode': True }})
    capability_speed_gt: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'capability_speed__gt', 'style': 'form', 'explode': True }})
    capability_speed_gte: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'capability_speed__gte', 'style': 'form', 'explode': True }})
    capability_speed_lt: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'capability_speed__lt', 'style': 'form', 'explode': True }})
    capability_speed_lte: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'capability_speed__lte', 'style': 'form', 'explode': True }})
    facility: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'facility', 'style': 'form', 'explode': True }})
    id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': False }})
    metro_area_network: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'metro_area_network', 'style': 'form', 'explode': True }})
    name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'name', 'style': 'form', 'explode': True }})
    pop: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'pop', 'style': 'form', 'explode': True }})
    

@dataclass
class DevicesListRequest:
    query_params: DevicesListQueryParams = field(default=None)
    
class DevicesList400ApplicationJSONTypeEnum(str, Enum):
    HTTPS_ERRORS_IX_API_NET_V2_VALIDATION_ERROR_HTML = "https://errors.ix-api.net/v2/validation-error.html"


@dataclass_json
@dataclass
class DevicesList400ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    status: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: DevicesList400ApplicationJSONTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class DevicesList401ApplicationJSONTypeEnum(str, Enum):
    HTTPS_ERRORS_IX_API_NET_V2_AUTHENTICATION_ERROR_HTML = "https://errors.ix-api.net/v2/authentication-error.html"
    HTTPS_ERRORS_IX_API_NET_V2_SIGNATURE_EXPIRED_HTML = "https://errors.ix-api.net/v2/signature-expired.html"


@dataclass_json
@dataclass
class DevicesList401ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    status: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: DevicesList401ApplicationJSONTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class DevicesList403ApplicationJSONTypeEnum(str, Enum):
    HTTPS_ERRORS_IX_API_NET_V2_PERMISSION_DENIED_HTML = "https://errors.ix-api.net/v2/permission-denied.html"


@dataclass_json
@dataclass
class DevicesList403ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    status: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: DevicesList403ApplicationJSONTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class DevicesListResponse:
    content_type: str = field(default=None)
    devices: Optional[List[shared.Device]] = field(default=None)
    status_code: int = field(default=None)
    devices_list_400_application_json_object: Optional[DevicesList400ApplicationJSON] = field(default=None)
    devices_list_401_application_json_object: Optional[DevicesList401ApplicationJSON] = field(default=None)
    devices_list_403_application_json_object: Optional[DevicesList403ApplicationJSON] = field(default=None)
    
