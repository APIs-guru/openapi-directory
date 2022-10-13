from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class Post:
    division_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'division_id' }})
    label: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    maximum_memberships: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maximum_memberships' }})
    role: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    
