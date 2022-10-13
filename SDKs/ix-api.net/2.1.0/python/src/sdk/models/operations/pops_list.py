from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class PopsListQueryParams:
    capability_media_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'capability_media_type', 'style': 'form', 'explode': True }})
    capability_speed: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'capability_speed', 'style': 'form', 'explode': True }})
    capability_speed_gt: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'capability_speed__gt', 'style': 'form', 'explode': True }})
    capability_speed_gte: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'capability_speed__gte', 'style': 'form', 'explode': True }})
    capability_speed_lt: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'capability_speed__lt', 'style': 'form', 'explode': True }})
    capability_speed_lte: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'capability_speed__lte', 'style': 'form', 'explode': True }})
    facility: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'facility', 'style': 'form', 'explode': True }})
    id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': False }})
    metro_area_network: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'metro_area_network', 'style': 'form', 'explode': True }})
    

@dataclass
class PopsListRequest:
    query_params: PopsListQueryParams = field(default=None)
    
class PopsList400ApplicationJSONTypeEnum(str, Enum):
    HTTPS_ERRORS_IX_API_NET_V2_VALIDATION_ERROR_HTML = "https://errors.ix-api.net/v2/validation-error.html"


@dataclass_json
@dataclass
class PopsList400ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    status: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: PopsList400ApplicationJSONTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class PopsList401ApplicationJSONTypeEnum(str, Enum):
    HTTPS_ERRORS_IX_API_NET_V2_AUTHENTICATION_ERROR_HTML = "https://errors.ix-api.net/v2/authentication-error.html"
    HTTPS_ERRORS_IX_API_NET_V2_SIGNATURE_EXPIRED_HTML = "https://errors.ix-api.net/v2/signature-expired.html"


@dataclass_json
@dataclass
class PopsList401ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    status: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: PopsList401ApplicationJSONTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class PopsList403ApplicationJSONTypeEnum(str, Enum):
    HTTPS_ERRORS_IX_API_NET_V2_PERMISSION_DENIED_HTML = "https://errors.ix-api.net/v2/permission-denied.html"


@dataclass_json
@dataclass
class PopsList403ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    status: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: PopsList403ApplicationJSONTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class PopsListResponse:
    content_type: str = field(default=None)
    point_of_presences: Optional[List[shared.PointOfPresence]] = field(default=None)
    status_code: int = field(default=None)
    pops_list_400_application_json_object: Optional[PopsList400ApplicationJSON] = field(default=None)
    pops_list_401_application_json_object: Optional[PopsList401ApplicationJSON] = field(default=None)
    pops_list_403_application_json_object: Optional[PopsList403ApplicationJSON] = field(default=None)
    
