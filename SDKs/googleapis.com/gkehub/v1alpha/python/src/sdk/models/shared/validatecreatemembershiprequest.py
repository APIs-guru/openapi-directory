from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import membership


@dataclass_json
@dataclass
class ValidateCreateMembershipRequest:
    membership: Optional[membership.Membership] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'membership' }})
    membership_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'membershipId' }})
    
