from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class OrgMembershipTypeEnum(str, Enum):
    ENTITY_TYPE_UNSPECIFIED = "ENTITY_TYPE_UNSPECIFIED"
    SHARED_DRIVE = "SHARED_DRIVE"


@dataclass_json
@dataclass
class OrgMembership:
    member: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'member' }})
    member_uri: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memberUri' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    type: Optional[OrgMembershipTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
