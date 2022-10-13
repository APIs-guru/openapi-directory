from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import compactperson


@dataclass_json
@dataclass
class PersonVote:
    option: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'option' }})
    voter: Optional[compactperson.CompactPerson] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voter' }})
    voter_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'voter_name' }})
    
