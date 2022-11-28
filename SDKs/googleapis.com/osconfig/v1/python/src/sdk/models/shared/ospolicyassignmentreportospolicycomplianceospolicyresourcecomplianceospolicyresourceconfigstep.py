from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceOsPolicyResourceConfigStepTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    VALIDATION = "VALIDATION"
    DESIRED_STATE_CHECK = "DESIRED_STATE_CHECK"
    DESIRED_STATE_ENFORCEMENT = "DESIRED_STATE_ENFORCEMENT"
    DESIRED_STATE_CHECK_POST_ENFORCEMENT = "DESIRED_STATE_CHECK_POST_ENFORCEMENT"


@dataclass_json
@dataclass
class OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceOsPolicyResourceConfigStep:
    r"""OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceOsPolicyResourceConfigStep
    Step performed by the OS Config agent for configuring an `OSPolicy` resource to its desired state.
    """
    
    error_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorMessage') }})
    type: Optional[OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceOsPolicyResourceConfigStepTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
