from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceComplianceStateEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    COMPLIANT = "COMPLIANT"
    NON_COMPLIANT = "NON_COMPLIANT"


@dataclass_json
@dataclass
class OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceCompliance:
    r"""OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceCompliance
    Compliance data for an OS policy resource.
    """
    
    compliance_state: Optional[OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceComplianceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('complianceState') }})
    compliance_state_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('complianceStateReason') }})
    config_steps: Optional[List[OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceOsPolicyResourceConfigStep]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configSteps') }})
    exec_resource_output: Optional[OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceExecResourceOutput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('execResourceOutput') }})
    os_policy_resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osPolicyResourceId') }})
    
