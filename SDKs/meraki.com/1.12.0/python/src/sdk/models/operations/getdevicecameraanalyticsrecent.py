from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum


@dataclass
class GetDeviceCameraAnalyticsRecentPathParams:
    serial: str = field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    
class GetDeviceCameraAnalyticsRecentObjectTypeEnum(str, Enum):
    PERSON = "person"
    VEHICLE = "vehicle"


@dataclass
class GetDeviceCameraAnalyticsRecentQueryParams:
    object_type: Optional[GetDeviceCameraAnalyticsRecentObjectTypeEnum] = field(default=None, metadata={'query_param': { 'field_name': 'objectType', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDeviceCameraAnalyticsRecentRequest:
    path_params: GetDeviceCameraAnalyticsRecentPathParams = field()
    query_params: GetDeviceCameraAnalyticsRecentQueryParams = field()
    

@dataclass
class GetDeviceCameraAnalyticsRecentResponse:
    content_type: str = field()
    status_code: int = field()
    get_device_camera_analytics_recent_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
