from dataclasses import dataclass, field
from typing import List
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GroupRelation:
    groups: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groups' }})
    type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
