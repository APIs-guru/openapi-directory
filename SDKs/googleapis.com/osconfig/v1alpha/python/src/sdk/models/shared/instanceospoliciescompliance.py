from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class InstanceOsPoliciesComplianceStateEnum(str, Enum):
    OS_POLICY_COMPLIANCE_STATE_UNSPECIFIED = "OS_POLICY_COMPLIANCE_STATE_UNSPECIFIED"
    COMPLIANT = "COMPLIANT"
    NON_COMPLIANT = "NON_COMPLIANT"
    UNKNOWN = "UNKNOWN"
    NO_OS_POLICIES_APPLICABLE = "NO_OS_POLICIES_APPLICABLE"


@dataclass_json
@dataclass
class InstanceOsPoliciesCompliance:
    r"""InstanceOsPoliciesCompliance
    This API resource represents the OS policies compliance data for a Compute Engine virtual machine (VM) instance at a given point in time. A Compute Engine VM can have multiple OS policy assignments, and each assignment can have multiple OS policies. As a result, multiple OS policies could be applied to a single VM. You can use this API resource to determine both the compliance state of your VM as well as the compliance state of an individual OS policy. For more information, see [View compliance](https://cloud.google.com/compute/docs/os-configuration-management/view-compliance).
    """
    
    detailed_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detailedState') }})
    detailed_state_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detailedStateReason') }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instance') }})
    last_compliance_check_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastComplianceCheckTime') }})
    last_compliance_run_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastComplianceRunId') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    os_policy_compliances: Optional[List[InstanceOsPoliciesComplianceOsPolicyCompliance]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osPolicyCompliances') }})
    state: Optional[InstanceOsPoliciesComplianceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
