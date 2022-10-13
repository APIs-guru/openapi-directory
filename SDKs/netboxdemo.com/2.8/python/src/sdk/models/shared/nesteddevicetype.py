from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import nestedmanufacturer


@dataclass_json
@dataclass
class NestedDeviceType:
    device_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'device_count' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'display_name' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    manufacturer: Optional[nestedmanufacturer.NestedManufacturer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'manufacturer' }})
    model: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'model' }})
    slug: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
