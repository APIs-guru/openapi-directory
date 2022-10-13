from dataclasses import dataclass, field
from typing import Any,Enum,Optional


@dataclass
class GetDeviceCameraAnalyticsZoneHistoryPathParams:
    serial: str = field(default=None, metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    zone_id: str = field(default=None, metadata={'path_param': { 'field_name': 'zoneId', 'style': 'simple', 'explode': False }})
    
class GetDeviceCameraAnalyticsZoneHistoryObjectTypeEnum(str, Enum):
    PERSON = "person"
    VEHICLE = "vehicle"


@dataclass
class GetDeviceCameraAnalyticsZoneHistoryQueryParams:
    object_type: Optional[GetDeviceCameraAnalyticsZoneHistoryObjectTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'objectType', 'style': 'form', 'explode': True }})
    resolution: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'resolution', 'style': 'form', 'explode': True }})
    t0: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 't0', 'style': 'form', 'explode': True }})
    t1: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 't1', 'style': 'form', 'explode': True }})
    timespan: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'timespan', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDeviceCameraAnalyticsZoneHistoryRequest:
    path_params: GetDeviceCameraAnalyticsZoneHistoryPathParams = field(default=None)
    query_params: GetDeviceCameraAnalyticsZoneHistoryQueryParams = field(default=None)
    

@dataclass
class GetDeviceCameraAnalyticsZoneHistoryResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_device_camera_analytics_zone_history_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
