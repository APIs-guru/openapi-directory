from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import ospolicyassignmentreportospolicycomplianceospolicyresourcecomplianceospolicyresourceconfigstep
from . import ospolicyassignmentreportospolicycomplianceospolicyresourcecomplianceexecresourceoutput

class OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceComplianceStateEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    COMPLIANT = "COMPLIANT"
    NON_COMPLIANT = "NON_COMPLIANT"


@dataclass_json
@dataclass
class OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceCompliance:
    compliance_state: Optional[OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceComplianceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'complianceState' }})
    compliance_state_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'complianceStateReason' }})
    config_steps: Optional[List[ospolicyassignmentreportospolicycomplianceospolicyresourcecomplianceospolicyresourceconfigstep.OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceOsPolicyResourceConfigStep]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configSteps' }})
    exec_resource_output: Optional[ospolicyassignmentreportospolicycomplianceospolicyresourcecomplianceexecresourceoutput.OsPolicyAssignmentReportOsPolicyComplianceOsPolicyResourceComplianceExecResourceOutput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'execResourceOutput' }})
    os_policy_resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'osPolicyResourceId' }})
    
