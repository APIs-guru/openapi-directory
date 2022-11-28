from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudAssetV1ConstraintConstraintDefaultEnum(str, Enum):
    CONSTRAINT_DEFAULT_UNSPECIFIED = "CONSTRAINT_DEFAULT_UNSPECIFIED"
    ALLOW = "ALLOW"
    DENY = "DENY"


@dataclass_json
@dataclass
class GoogleCloudAssetV1Constraint:
    r"""GoogleCloudAssetV1Constraint
    The definition of a constraint.
    """
    
    boolean_constraint: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('booleanConstraint') }})
    constraint_default: Optional[GoogleCloudAssetV1ConstraintConstraintDefaultEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('constraintDefault') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    list_constraint: Optional[GoogleCloudAssetV1ListConstraint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listConstraint') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
