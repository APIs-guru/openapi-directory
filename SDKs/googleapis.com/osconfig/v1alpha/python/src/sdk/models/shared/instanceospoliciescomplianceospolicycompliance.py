from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class InstanceOsPoliciesComplianceOsPolicyComplianceStateEnum(str, Enum):
    OS_POLICY_COMPLIANCE_STATE_UNSPECIFIED = "OS_POLICY_COMPLIANCE_STATE_UNSPECIFIED"
    COMPLIANT = "COMPLIANT"
    NON_COMPLIANT = "NON_COMPLIANT"
    UNKNOWN = "UNKNOWN"
    NO_OS_POLICIES_APPLICABLE = "NO_OS_POLICIES_APPLICABLE"


@dataclass_json
@dataclass
class InstanceOsPoliciesComplianceOsPolicyCompliance:
    r"""InstanceOsPoliciesComplianceOsPolicyCompliance
    Compliance data for an OS policy
    """
    
    os_policy_assignment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osPolicyAssignment') }})
    os_policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osPolicyId') }})
    os_policy_resource_compliances: Optional[List[OsPolicyResourceCompliance]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osPolicyResourceCompliances') }})
    state: Optional[InstanceOsPoliciesComplianceOsPolicyComplianceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
