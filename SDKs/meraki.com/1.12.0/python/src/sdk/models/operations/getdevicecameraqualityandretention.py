from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetDeviceCameraQualityAndRetentionPathParams:
    serial: str = field(default=None, metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeviceCameraQualityAndRetentionRequest:
    path_params: GetDeviceCameraQualityAndRetentionPathParams = field(default=None)
    

@dataclass
class GetDeviceCameraQualityAndRetentionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_device_camera_quality_and_retention_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
