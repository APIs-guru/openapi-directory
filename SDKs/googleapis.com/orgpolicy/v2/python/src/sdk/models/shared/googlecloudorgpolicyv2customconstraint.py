from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
class GoogleCloudOrgpolicyV2CustomConstraintInput:
    r"""GoogleCloudOrgpolicyV2CustomConstraintInput
    A custom constraint defined by customers which can *only* be applied to the given resource types and organization. By creating a custom constraint, customers can applied policies of this custom constraint. *Creating a custom constraint itself does NOT apply any policy enforcement*.
    """
    
    action_type: Optional[GoogleCloudOrgpolicyV2CustomConstraintActionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionType') }})
    condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    method_types: Optional[List[GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('methodTypes') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resource_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceTypes') }})
    

@dataclass_json
@dataclass
class GoogleCloudOrgpolicyV2CustomConstraint:
    r"""GoogleCloudOrgpolicyV2CustomConstraint
    A custom constraint defined by customers which can *only* be applied to the given resource types and organization. By creating a custom constraint, customers can applied policies of this custom constraint. *Creating a custom constraint itself does NOT apply any policy enforcement*.
    """
    
    action_type: Optional[GoogleCloudOrgpolicyV2CustomConstraintActionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionType') }})
    condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    method_types: Optional[List[GoogleCloudOrgpolicyV2CustomConstraintMethodTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('methodTypes') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resource_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceTypes') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
