from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import ospolicyassignmentreportospolicycomplianceospolicyresourcecompliance

class OsPolicyAssignmentReportOsPolicyComplianceComplianceStateEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    COMPLIANT = "COMPLIANT"
    NON_COMPLIANT = "NON_COMPLIANT"


@dataclass_json
@dataclass
class OsPolicyAssignmentReportOsPolicyCompliance:
    compliance_state: Optional[OsPolicyAssignmentReportOsPolicyComplianceComplianceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'complianceState' }})
    compliance_state_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'complianceStateReason' }})
    os_policy_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'osPolicyId' }})
    os_policy_resource_compliances: Optional[List[ospolicyassignmentreportospolicycomplianceospolicyresourcecompliance.OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceCompliance]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'osPolicyResourceCompliances' }})
    
