from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class OsPolicyAssignmentReportOsPolicyComplianceComplianceStateEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    COMPLIANT = "COMPLIANT"
    NON_COMPLIANT = "NON_COMPLIANT"


@dataclass_json
@dataclass
class OsPolicyAssignmentReportOsPolicyCompliance:
    r"""OsPolicyAssignmentReportOsPolicyCompliance
    Compliance data for an OS policy
    """
    
    compliance_state: Optional[OsPolicyAssignmentReportOsPolicyComplianceComplianceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('complianceState') }})
    compliance_state_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('complianceStateReason') }})
    os_policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osPolicyId') }})
    os_policy_resource_compliances: Optional[List[OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceCompliance]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osPolicyResourceCompliances') }})
    
