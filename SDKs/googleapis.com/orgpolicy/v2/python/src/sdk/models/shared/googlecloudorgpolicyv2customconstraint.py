from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class GoogleCloudOrgpolicyV2CustomConstraintActionTypeEnum(str, Enum):
    ACTION_TYPE_UNSPECIFIED = "ACTION_TYPE_UNSPECIFIED"
    ALLOW = "ALLOW"
    DENY = "DENY"

class GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum(str, Enum):
    METHOD_TYPE_UNSPECIFIED = "METHOD_TYPE_UNSPECIFIED"
    CREATE = "CREATE"
    UPDATE = "UPDATE"
    DELETE = "DELETE"


@dataclass_json
@dataclass
class GoogleCloudOrgpolicyV2CustomConstraint:
    action_type: Optional[GoogleCloudOrgpolicyV2CustomConstraintActionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'actionType' }})
    condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'condition' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    method_types: Optional[List[GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'methodTypes' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    resource_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceTypes' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
