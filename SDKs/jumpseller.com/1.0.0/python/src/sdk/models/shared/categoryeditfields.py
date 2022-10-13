from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CategoryEditFields:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    parent_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'parent_id' }})
    
