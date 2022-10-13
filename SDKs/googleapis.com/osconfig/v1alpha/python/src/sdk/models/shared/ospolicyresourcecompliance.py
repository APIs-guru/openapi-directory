from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import ospolicyresourceconfigstep
from . import ospolicyresourcecomplianceexecresourceoutput

class OsPolicyResourceComplianceStateEnum(str, Enum):
    OS_POLICY_COMPLIANCE_STATE_UNSPECIFIED = "OS_POLICY_COMPLIANCE_STATE_UNSPECIFIED"
    COMPLIANT = "COMPLIANT"
    NON_COMPLIANT = "NON_COMPLIANT"
    UNKNOWN = "UNKNOWN"
    NO_OS_POLICIES_APPLICABLE = "NO_OS_POLICIES_APPLICABLE"


@dataclass_json
@dataclass
class OsPolicyResourceCompliance:
    config_steps: Optional[List[ospolicyresourceconfigstep.OsPolicyResourceConfigStep]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configSteps' }})
    exec_resource_output: Optional[ospolicyresourcecomplianceexecresourceoutput.OsPolicyResourceComplianceExecResourceOutput] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'execResourceOutput' }})
    os_policy_resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'osPolicyResourceId' }})
    state: Optional[OsPolicyResourceComplianceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
