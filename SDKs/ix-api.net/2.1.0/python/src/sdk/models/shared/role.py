from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Role:
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    required_fields: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'required_fields' }})
    
