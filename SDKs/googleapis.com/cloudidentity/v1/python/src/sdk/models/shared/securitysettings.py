from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import memberrestriction


@dataclass_json
@dataclass
class SecuritySettings:
    member_restriction: Optional[memberrestriction.MemberRestriction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memberRestriction' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
