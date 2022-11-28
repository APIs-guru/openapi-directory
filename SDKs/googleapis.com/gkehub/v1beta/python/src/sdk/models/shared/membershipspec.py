from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class MembershipSpecSecurityPolicyEnum(str, Enum):
    SECURITY_POLICY_UNSPECIFIED = "SECURITY_POLICY_UNSPECIFIED"
    NON_PRIVILEGED = "NON_PRIVILEGED"
    PRIVILEGED = "PRIVILEGED"


@dataclass_json
@dataclass
class MembershipSpec:
    r"""MembershipSpec
    **Cloud Build**: Configurations for each Cloud Build enabled cluster.
    """
    
    security_policy: Optional[MembershipSpecSecurityPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('securityPolicy') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
