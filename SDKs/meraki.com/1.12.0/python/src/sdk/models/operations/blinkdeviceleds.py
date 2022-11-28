from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class BlinkDeviceLedsPathParams:
    serial: str = field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class BlinkDeviceLedsRequestBody:
    duration: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duration') }})
    duty: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('duty') }})
    period: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('period') }})
    

@dataclass
class BlinkDeviceLedsRequest:
    path_params: BlinkDeviceLedsPathParams = field()
    request: Optional[BlinkDeviceLedsRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class BlinkDeviceLedsResponse:
    content_type: str = field()
    status_code: int = field()
    blink_device_leds_202_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
