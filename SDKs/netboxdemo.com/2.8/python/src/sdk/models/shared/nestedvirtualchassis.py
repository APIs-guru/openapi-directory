from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import nesteddevice


@dataclass_json
@dataclass
class NestedVirtualChassis:
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    master: nesteddevice.NestedDevice = field(default=None, metadata={'dataclasses_json': { 'field_name': 'master' }})
    member_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'member_count' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
