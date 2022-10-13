from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import member
from . import organisation


@dataclass_json
@dataclass
class Sponsor:
    member: Optional[member.Member] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'member' }})
    organisation: Optional[organisation.Organisation] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organisation' }})
    sort_order: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sortOrder' }})
    
