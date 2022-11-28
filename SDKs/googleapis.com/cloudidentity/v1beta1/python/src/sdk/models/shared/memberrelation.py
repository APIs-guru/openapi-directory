from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class MemberRelationRelationTypeEnum(str, Enum):
    RELATION_TYPE_UNSPECIFIED = "RELATION_TYPE_UNSPECIFIED"
    DIRECT = "DIRECT"
    INDIRECT = "INDIRECT"
    DIRECT_AND_INDIRECT = "DIRECT_AND_INDIRECT"


@dataclass_json
@dataclass
class MemberRelation:
    r"""MemberRelation
    Message representing a transitive membership of a group.
    """
    
    member: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('member') }})
    preferred_member_key: Optional[List[EntityKey]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preferredMemberKey') }})
    relation_type: Optional[MemberRelationRelationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationType') }})
    roles: Optional[List[TransitiveMembershipRole]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roles') }})
    
