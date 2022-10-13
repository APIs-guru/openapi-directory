from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import devicecapability


@dataclass_json
@dataclass
class Device:
    capabilities: Optional[List[devicecapability.DeviceCapability]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'capabilities' }})
    facility: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'facility' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    pop: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pop' }})
    
