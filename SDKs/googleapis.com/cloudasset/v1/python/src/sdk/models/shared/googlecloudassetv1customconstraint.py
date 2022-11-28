from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleCloudAssetV1CustomConstraintActionTypeEnum(str, Enum):
    ACTION_TYPE_UNSPECIFIED = "ACTION_TYPE_UNSPECIFIED"
    ALLOW = "ALLOW"
    DENY = "DENY"

class GoogleCloudAssetV1CustomConstraintMethodTypesEnum(str, Enum):
    METHOD_TYPE_UNSPECIFIED = "METHOD_TYPE_UNSPECIFIED"
    CREATE = "CREATE"
    UPDATE = "UPDATE"
    DELETE = "DELETE"


@dataclass_json
@dataclass
class GoogleCloudAssetV1CustomConstraint:
    r"""GoogleCloudAssetV1CustomConstraint
    The definition of a custom constraint.
    """
    
    action_type: Optional[GoogleCloudAssetV1CustomConstraintActionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('actionType') }})
    condition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('condition') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    method_types: Optional[List[GoogleCloudAssetV1CustomConstraintMethodTypesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('methodTypes') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    resource_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resourceTypes') }})
    
