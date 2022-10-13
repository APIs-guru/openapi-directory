from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import currentrole


@dataclass_json
@dataclass
class CompactPerson:
    current_role: Optional[currentrole.CurrentRole] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'current_role' }})
    id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    party: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'party' }})
    
