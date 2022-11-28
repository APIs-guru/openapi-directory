from dataclasses import dataclass, field
from typing import Any,List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass
class CycleDeviceSwitchPortsPathParams:
    serial: str = field(metadata={'path_param': { 'field_name': 'serial', 'style': 'simple', 'explode': False }})
    

@dataclass_json
@dataclass
class CycleDeviceSwitchPortsRequestBody:
    ports: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('ports') }})
    

@dataclass
class CycleDeviceSwitchPortsRequest:
    path_params: CycleDeviceSwitchPortsPathParams = field()
    request: CycleDeviceSwitchPortsRequestBody = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class CycleDeviceSwitchPortsResponse:
    content_type: str = field()
    status_code: int = field()
    cycle_device_switch_ports_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
