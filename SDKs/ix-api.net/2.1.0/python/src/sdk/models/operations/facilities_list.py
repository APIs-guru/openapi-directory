from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class FacilitiesListQueryParams:
    address_country: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'address_country', 'style': 'form', 'explode': True }})
    address_locality: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'address_locality', 'style': 'form', 'explode': True }})
    capability_media_type: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'capability_media_type', 'style': 'form', 'explode': True }})
    capability_speed: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'capability_speed', 'style': 'form', 'explode': True }})
    capability_speed_gt: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'capability_speed__gt', 'style': 'form', 'explode': True }})
    capability_speed_gte: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'capability_speed__gte', 'style': 'form', 'explode': True }})
    capability_speed_lt: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'capability_speed__lt', 'style': 'form', 'explode': True }})
    capability_speed_lte: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'capability_speed__lte', 'style': 'form', 'explode': True }})
    id: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': False }})
    metro_area: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'metro_area', 'style': 'form', 'explode': True }})
    metro_area_network: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'metro_area_network', 'style': 'form', 'explode': True }})
    organisation_name: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'organisation_name', 'style': 'form', 'explode': True }})
    postal_code: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'postal_code', 'style': 'form', 'explode': True }})
    

@dataclass
class FacilitiesListRequest:
    query_params: FacilitiesListQueryParams = field(default=None)
    
class FacilitiesList400ApplicationJSONTypeEnum(str, Enum):
    HTTPS_ERRORS_IX_API_NET_V2_VALIDATION_ERROR_HTML = "https://errors.ix-api.net/v2/validation-error.html"


@dataclass_json
@dataclass
class FacilitiesList400ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    status: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: FacilitiesList400ApplicationJSONTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class FacilitiesList401ApplicationJSONTypeEnum(str, Enum):
    HTTPS_ERRORS_IX_API_NET_V2_AUTHENTICATION_ERROR_HTML = "https://errors.ix-api.net/v2/authentication-error.html"
    HTTPS_ERRORS_IX_API_NET_V2_SIGNATURE_EXPIRED_HTML = "https://errors.ix-api.net/v2/signature-expired.html"


@dataclass_json
@dataclass
class FacilitiesList401ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    status: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: FacilitiesList401ApplicationJSONTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
class FacilitiesList403ApplicationJSONTypeEnum(str, Enum):
    HTTPS_ERRORS_IX_API_NET_V2_PERMISSION_DENIED_HTML = "https://errors.ix-api.net/v2/permission-denied.html"


@dataclass_json
@dataclass
class FacilitiesList403ApplicationJSON:
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detail' }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    status: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    title: Optional[Any] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    type: FacilitiesList403ApplicationJSONTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    

@dataclass
class FacilitiesListResponse:
    content_type: str = field(default=None)
    facilities: Optional[List[shared.Facility]] = field(default=None)
    status_code: int = field(default=None)
    facilities_list_400_application_json_object: Optional[FacilitiesList400ApplicationJSON] = field(default=None)
    facilities_list_401_application_json_object: Optional[FacilitiesList401ApplicationJSON] = field(default=None)
    facilities_list_403_application_json_object: Optional[FacilitiesList403ApplicationJSON] = field(default=None)
    
