from dataclasses import dataclass, field
from typing import Any,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class GoogleCloudOrgpolicyV2ConstraintConstraintDefaultEnum(str, Enum):
    CONSTRAINT_DEFAULT_UNSPECIFIED = "CONSTRAINT_DEFAULT_UNSPECIFIED"
    ALLOW = "ALLOW"
    DENY = "DENY"


@dataclass_json
@dataclass
class GoogleCloudOrgpolicyV2Constraint:
    r"""GoogleCloudOrgpolicyV2Constraint
    A `constraint` describes a way to restrict resource's configuration. For example, you could enforce a constraint that controls which cloud services can be activated across an organization, or whether a Compute Engine instance can have serial port connections established. `Constraints` can be configured by the organization's policy administrator to fit the needs of the organization by setting a `policy` that includes `constraints` at different locations in the organization's resource hierarchy. Policies are inherited down the resource hierarchy from higher levels, but can also be overridden. For details about the inheritance rules please read about `policies`. `Constraints` have a default behavior determined by the `constraint_default` field, which is the enforcement behavior that is used in the absence of a `policy` being defined or inherited for the resource in question.
    """
    
    boolean_constraint: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('booleanConstraint') }})
    constraint_default: Optional[GoogleCloudOrgpolicyV2ConstraintConstraintDefaultEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('constraintDefault') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    list_constraint: Optional[GoogleCloudOrgpolicyV2ConstraintListConstraint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listConstraint') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    
