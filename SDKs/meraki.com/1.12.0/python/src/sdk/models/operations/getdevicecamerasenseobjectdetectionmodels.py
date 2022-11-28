from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetDeviceCameraSenseObjectDetectionModelsPathParams:
    serial: str = field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeviceCameraSenseObjectDetectionModelsRequest:
    path_params: GetDeviceCameraSenseObjectDetectionModelsPathParams = field()
    

@dataclass
class GetDeviceCameraSenseObjectDetectionModelsResponse:
    content_type: str = field()
    status_code: int = field()
    get_device_camera_sense_object_detection_models_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
