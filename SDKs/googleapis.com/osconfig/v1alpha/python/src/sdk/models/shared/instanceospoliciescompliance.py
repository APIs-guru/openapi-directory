from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import instanceospoliciescomplianceospolicycompliance

class InstanceOsPoliciesComplianceStateEnum(str, Enum):
    OS_POLICY_COMPLIANCE_STATE_UNSPECIFIED = "OS_POLICY_COMPLIANCE_STATE_UNSPECIFIED"
    COMPLIANT = "COMPLIANT"
    NON_COMPLIANT = "NON_COMPLIANT"
    UNKNOWN = "UNKNOWN"
    NO_OS_POLICIES_APPLICABLE = "NO_OS_POLICIES_APPLICABLE"


@dataclass_json
@dataclass
class InstanceOsPoliciesCompliance:
    detailed_state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detailedState' }})
    detailed_state_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'detailedStateReason' }})
    instance: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instance' }})
    last_compliance_check_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastComplianceCheckTime' }})
    last_compliance_run_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastComplianceRunId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    os_policy_compliances: Optional[List[instanceospoliciescomplianceospolicycompliance.InstanceOsPoliciesComplianceOsPolicyCompliance]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'osPolicyCompliances' }})
    state: Optional[InstanceOsPoliciesComplianceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
