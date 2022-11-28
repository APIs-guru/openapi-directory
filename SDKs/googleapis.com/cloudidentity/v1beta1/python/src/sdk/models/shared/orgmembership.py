from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class OrgMembershipTypeEnum(str, Enum):
    ENTITY_TYPE_UNSPECIFIED = "ENTITY_TYPE_UNSPECIFIED"
    SHARED_DRIVE = "SHARED_DRIVE"


@dataclass_json
@dataclass
class OrgMembership:
    r"""OrgMembership
    A membership in an OrgUnit. An `OrgMembership` defines a relationship between an `OrgUnit` and an entity belonging to that `OrgUnit`, referred to as a \"member\".
    """
    
    member: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('member') }})
    member_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberUri') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    type: Optional[OrgMembershipTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
