from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import post


@dataclass_json
@dataclass
class Chamber:
    classification: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'classification' }})
    districts: Optional[List[post.Post]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'districts' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
