from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum


@dataclass
class GetDeviceCameraAnalyticsZoneHistoryPathParams:
    serial: str = field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    zone_id: str = field(metadata={'path_param': { 'field_name': 'zoneId', 'style': 'simple', 'explode': False }})
    
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
    path_params: GetDeviceCameraAnalyticsZoneHistoryPathParams = field()
    query_params: GetDeviceCameraAnalyticsZoneHistoryQueryParams = field()
    

@dataclass
class GetDeviceCameraAnalyticsZoneHistoryResponse:
    content_type: str = field()
    status_code: int = field()
    get_device_camera_analytics_zone_history_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
