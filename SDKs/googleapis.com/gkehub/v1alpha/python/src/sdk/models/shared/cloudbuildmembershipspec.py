from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class CloudBuildMembershipSpecSecurityPolicyEnum(str, Enum):
    SECURITY_POLICY_UNSPECIFIED = "SECURITY_POLICY_UNSPECIFIED"
    NON_PRIVILEGED = "NON_PRIVILEGED"
    PRIVILEGED = "PRIVILEGED"


@dataclass_json
@dataclass
class CloudBuildMembershipSpec:
    security_policy: Optional[CloudBuildMembershipSpecSecurityPolicyEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'securityPolicy' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
