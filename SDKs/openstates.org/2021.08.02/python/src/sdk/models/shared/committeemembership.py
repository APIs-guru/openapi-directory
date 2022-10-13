from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import compactperson


@dataclass_json
@dataclass
class CommitteeMembership:
    person: Optional[compactperson.CompactPerson] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'person' }})
    person_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'person_name' }})
    role: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'role' }})
    
