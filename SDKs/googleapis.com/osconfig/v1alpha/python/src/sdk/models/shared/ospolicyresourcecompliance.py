from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class OsPolicyResourceComplianceStateEnum(str, Enum):
    OS_POLICY_COMPLIANCE_STATE_UNSPECIFIED = "OS_POLICY_COMPLIANCE_STATE_UNSPECIFIED"
    COMPLIANT = "COMPLIANT"
    NON_COMPLIANT = "NON_COMPLIANT"
    UNKNOWN = "UNKNOWN"
    NO_OS_POLICIES_APPLICABLE = "NO_OS_POLICIES_APPLICABLE"


@dataclass_json
@dataclass
class OsPolicyResourceCompliance:
    r"""OsPolicyResourceCompliance
    Compliance data for an OS policy resource.
    """
    
    config_steps: Optional[List[OsPolicyResourceConfigStep]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('configSteps') }})
    exec_resource_output: Optional[OsPolicyResourceComplianceExecResourceOutput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('execResourceOutput') }})
    os_policy_resource_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('osPolicyResourceId') }})
    state: Optional[OsPolicyResourceComplianceStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
