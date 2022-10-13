from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import nesteddevicetype


@dataclass_json
@dataclass
class DeviceBayTemplate:
    device_type: nesteddevicetype.NestedDeviceType = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device_type' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
