from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetDeviceCameraQualityAndRetentionPathParams:
    serial: str = field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeviceCameraQualityAndRetentionRequest:
    path_params: GetDeviceCameraQualityAndRetentionPathParams = field()
    

@dataclass
class GetDeviceCameraQualityAndRetentionResponse:
    content_type: str = field()
    status_code: int = field()
    get_device_camera_quality_and_retention_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
