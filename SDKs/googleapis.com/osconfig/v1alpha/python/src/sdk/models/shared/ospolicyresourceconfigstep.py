from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class OsPolicyResourceConfigStepOutcomeEnum(str, Enum):
    OUTCOME_UNSPECIFIED = "OUTCOME_UNSPECIFIED"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"

class OsPolicyResourceConfigStepTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    VALIDATION = "VALIDATION"
    DESIRED_STATE_CHECK = "DESIRED_STATE_CHECK"
    DESIRED_STATE_ENFORCEMENT = "DESIRED_STATE_ENFORCEMENT"
    DESIRED_STATE_CHECK_POST_ENFORCEMENT = "DESIRED_STATE_CHECK_POST_ENFORCEMENT"


@dataclass_json
@dataclass
class OsPolicyResourceConfigStep:
    r"""OsPolicyResourceConfigStep
    Step performed by the OS Config agent for configuring an `OSPolicyResource` to its desired state.
    """
    
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    outcome: Optional[OsPolicyResourceConfigStepOutcomeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('outcome') }})
    type: Optional[OsPolicyResourceConfigStepTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
