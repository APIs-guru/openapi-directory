from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import membershiprole


@dataclass_json
@dataclass
class UpdateMembershipRolesParams:
    field_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fieldMask' }})
    membership_role: Optional[membershiprole.MembershipRole] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'membershipRole' }})
    
