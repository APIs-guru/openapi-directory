from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorMessage' }})
    outcome: Optional[OsPolicyResourceConfigStepOutcomeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'outcome' }})
    type: Optional[OsPolicyResourceConfigStepTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
