from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Manufacturer:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    devicetype_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'devicetype_count' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    inventoryitem_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inventoryitem_count' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    platform_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platform_count' }})
    slug: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    
