from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import membership


@dataclass_json
@dataclass
class ModifyMembershipRolesResponse:
    membership: Optional[membership.Membership] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'membership' }})
    
