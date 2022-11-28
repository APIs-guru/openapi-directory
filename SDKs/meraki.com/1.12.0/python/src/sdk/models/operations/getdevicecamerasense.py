from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetDeviceCameraSensePathParams:
    serial: str = field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeviceCameraSenseRequest:
    path_params: GetDeviceCameraSensePathParams = field()
    

@dataclass
class GetDeviceCameraSenseResponse:
    content_type: str = field()
    status_code: int = field()
    get_device_camera_sense_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
