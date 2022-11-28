from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetDeviceCameraAnalyticsZonesPathParams:
    serial: str = field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeviceCameraAnalyticsZonesRequest:
    path_params: GetDeviceCameraAnalyticsZonesPathParams = field()
    

@dataclass
class GetDeviceCameraAnalyticsZonesResponse:
    content_type: str = field()
    status_code: int = field()
    get_device_camera_analytics_zones_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
