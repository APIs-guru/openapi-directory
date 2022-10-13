from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import devicestate


@dataclass_json
@dataclass
class ListDeviceStatesResponse:
    device_states: Optional[List[devicestate.DeviceState]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceStates' }})
    
