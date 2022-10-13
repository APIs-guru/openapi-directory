from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class WritableRackGroup:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent' }})
    rack_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rack_count' }})
    site: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'site' }})
    slug: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    
