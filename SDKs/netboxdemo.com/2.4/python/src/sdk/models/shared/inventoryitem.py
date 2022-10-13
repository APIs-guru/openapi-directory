from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import nesteddevice
from . import nestedmanufacturer


@dataclass_json
@dataclass
class InventoryItem:
    asset_tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'asset_tag' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    device: nesteddevice.NestedDevice = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device' }})
    discovered: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'discovered' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    manufacturer: Optional[nestedmanufacturer.NestedManufacturer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manufacturer' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    part_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'part_id' }})
    serial: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'serial' }})
    tags: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
