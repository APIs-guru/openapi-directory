from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import entitykey
from . import transitivemembershiprole

class MemberRelationRelationTypeEnum(str, Enum):
    RELATION_TYPE_UNSPECIFIED = "RELATION_TYPE_UNSPECIFIED"
    DIRECT = "DIRECT"
    INDIRECT = "INDIRECT"
    DIRECT_AND_INDIRECT = "DIRECT_AND_INDIRECT"


@dataclass_json
@dataclass
class MemberRelation:
    member: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'member' }})
    preferred_member_key: Optional[List[entitykey.EntityKey]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'preferredMemberKey' }})
    relation_type: Optional[MemberRelationRelationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationType' }})
    roles: Optional[List[transitivemembershiprole.TransitiveMembershipRole]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roles' }})
    
