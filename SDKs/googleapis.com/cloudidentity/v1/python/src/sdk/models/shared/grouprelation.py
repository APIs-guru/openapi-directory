from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GroupRelationRelationTypeEnum(str, Enum):
    RELATION_TYPE_UNSPECIFIED = "RELATION_TYPE_UNSPECIFIED"
    DIRECT = "DIRECT"
    INDIRECT = "INDIRECT"
    DIRECT_AND_INDIRECT = "DIRECT_AND_INDIRECT"


@dataclass_json
@dataclass
class GroupRelation:
    r"""GroupRelation
    Message representing a transitive group of a user or a group.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group') }})
    group_key: Optional[EntityKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupKey') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    relation_type: Optional[GroupRelationRelationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationType') }})
    roles: Optional[List[TransitiveMembershipRole]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roles') }})
    
