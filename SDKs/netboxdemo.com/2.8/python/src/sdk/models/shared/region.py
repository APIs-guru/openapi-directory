from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import nestedregion


@dataclass_json
@dataclass
class Region:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent: Optional[nestedregion.NestedRegion] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    site_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'site_count' }})
    slug: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    
