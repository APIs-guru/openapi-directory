from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import entitykey
from . import membershiprole

class MembershipTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    USER = "USER"
    SERVICE_ACCOUNT = "SERVICE_ACCOUNT"
    GROUP = "GROUP"
    SHARED_DRIVE = "SHARED_DRIVE"
    OTHER = "OTHER"


@dataclass_json
@dataclass
class Membership:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    preferred_member_key: Optional[entitykey.EntityKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preferredMemberKey' }})
    roles: Optional[List[membershiprole.MembershipRole]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roles' }})
    type: Optional[MembershipTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
