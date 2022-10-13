from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Rir:
    aggregate_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'aggregate_count' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_private: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'is_private' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    slug: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'slug' }})
    
