from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetDevicePathParams:
    serial: str = field(default=None, metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetDeviceRequest:
    path_params: GetDevicePathParams = field(default=None)
    

@dataclass
class GetDeviceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_device_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
