from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class WritablePlatform:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    device_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device_count' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    manufacturer: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manufacturer' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    napalm_args: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'napalm_args' }})
    napalm_driver: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'napalm_driver' }})
    slug: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    virtualmachine_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'virtualmachine_count' }})
    
