from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import nesteddevice


@dataclass_json
@dataclass
class NestedPowerOutlet:
    device: Optional[nesteddevice.NestedDevice] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_connected: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_connected' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
