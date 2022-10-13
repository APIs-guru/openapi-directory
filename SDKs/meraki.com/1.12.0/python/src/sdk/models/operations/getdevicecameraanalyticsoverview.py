from dataclasses import dataclass, field
from typing import Any,Enum,Optional


@dataclass
class GetDeviceCameraAnalyticsOverviewPathParams:
    serial: str = field(default=None, metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    
class GetDeviceCameraAnalyticsOverviewObjectTypeEnum(str, Enum):
    PERSON = "person"
    VEHICLE = "vehicle"


@dataclass
class GetDeviceCameraAnalyticsOverviewQueryParams:
    object_type: Optional[GetDeviceCameraAnalyticsOverviewObjectTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'objectType', 'style': 'form', 'explode': True }})
    t0: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 't0', 'style': 'form', 'explode': True }})
    t1: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 't1', 'style': 'form', 'explode': True }})
    timespan: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'timespan', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDeviceCameraAnalyticsOverviewRequest:
    path_params: GetDeviceCameraAnalyticsOverviewPathParams = field(default=None)
    query_params: GetDeviceCameraAnalyticsOverviewQueryParams = field(default=None)
    

@dataclass
class GetDeviceCameraAnalyticsOverviewResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_device_camera_analytics_overview_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
