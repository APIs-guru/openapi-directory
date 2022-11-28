from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CloudBuildMembershipSpecSecurityPolicyEnum(str, Enum):
    SECURITY_POLICY_UNSPECIFIED = "SECURITY_POLICY_UNSPECIFIED"
    NON_PRIVILEGED = "NON_PRIVILEGED"
    PRIVILEGED = "PRIVILEGED"


@dataclass_json
@dataclass
class CloudBuildMembershipSpec:
    r"""CloudBuildMembershipSpec
    **Cloud Build**: Configurations for each Cloud Build enabled cluster.
    """
    
    security_policy: Optional[CloudBuildMembershipSpecSecurityPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityPolicy') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
