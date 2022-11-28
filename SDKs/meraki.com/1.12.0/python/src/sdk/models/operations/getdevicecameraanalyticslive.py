from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetDeviceCameraAnalyticsLivePathParams:
    serial: str = field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeviceCameraAnalyticsLiveRequest:
    path_params: GetDeviceCameraAnalyticsLivePathParams = field()
    

@dataclass
class GetDeviceCameraAnalyticsLiveResponse:
    content_type: str = field()
    status_code: int = field()
    get_device_camera_analytics_live_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
