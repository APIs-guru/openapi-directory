from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeviceRole:
    color: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'color' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    slug: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    vm_role: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vm_role' }})
    
