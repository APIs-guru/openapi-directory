from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import ospolicyresourcecompliance

class InstanceOsPoliciesComplianceOsPolicyComplianceStateEnum(str, Enum):
    OS_POLICY_COMPLIANCE_STATE_UNSPECIFIED = "OS_POLICY_COMPLIANCE_STATE_UNSPECIFIED"
    COMPLIANT = "COMPLIANT"
    NON_COMPLIANT = "NON_COMPLIANT"
    UNKNOWN = "UNKNOWN"
    NO_OS_POLICIES_APPLICABLE = "NO_OS_POLICIES_APPLICABLE"


@dataclass_json
@dataclass
class InstanceOsPoliciesComplianceOsPolicyCompliance:
    os_policy_assignment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'osPolicyAssignment' }})
    os_policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'osPolicyId' }})
    os_policy_resource_compliances: Optional[List[ospolicyresourcecompliance.OsPolicyResourceCompliance]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'osPolicyResourceCompliances' }})
    state: Optional[InstanceOsPoliciesComplianceOsPolicyComplianceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
