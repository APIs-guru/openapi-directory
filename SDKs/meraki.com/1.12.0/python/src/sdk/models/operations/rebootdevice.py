from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class RebootDevicePathParams:
    serial: str = field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass
class RebootDeviceRequest:
    path_params: RebootDevicePathParams = field()
    

@dataclass
class RebootDeviceResponse:
    content_type: str = field()
    status_code: int = field()
    reboot_device_202_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
