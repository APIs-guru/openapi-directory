from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetDeviceCameraAnalyticsZonesPathParams:
    serial: str = field(default=None, metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeviceCameraAnalyticsZonesRequest:
    path_params: GetDeviceCameraAnalyticsZonesPathParams = field(default=None)
    

@dataclass
class GetDeviceCameraAnalyticsZonesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_device_camera_analytics_zones_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
