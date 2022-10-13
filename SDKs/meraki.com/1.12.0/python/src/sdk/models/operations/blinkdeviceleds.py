from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json


@dataclass
class BlinkDeviceLedsPathParams:
    serial: str = field(default=None, metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class BlinkDeviceLedsRequestBody:
    duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duration' }})
    duty: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'duty' }})
    period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'period' }})
    

@dataclass
class BlinkDeviceLedsRequest:
    path_params: BlinkDeviceLedsPathParams = field(default=None)
    request: Optional[BlinkDeviceLedsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BlinkDeviceLedsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    blink_device_leds_202_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
