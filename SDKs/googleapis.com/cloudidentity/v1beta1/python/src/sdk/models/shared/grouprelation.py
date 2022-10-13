from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import entitykey
from . import transitivemembershiprole

class GroupRelationRelationTypeEnum(str, Enum):
    RELATION_TYPE_UNSPECIFIED = "RELATION_TYPE_UNSPECIFIED"
    DIRECT = "DIRECT"
    INDIRECT = "INDIRECT"
    DIRECT_AND_INDIRECT = "DIRECT_AND_INDIRECT"


@dataclass_json
@dataclass
class GroupRelation:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group' }})
    group_key: Optional[entitykey.EntityKey] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'groupKey' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    relation_type: Optional[GroupRelationRelationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationType' }})
    roles: Optional[List[transitivemembershiprole.TransitiveMembershipRole]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roles' }})
    
