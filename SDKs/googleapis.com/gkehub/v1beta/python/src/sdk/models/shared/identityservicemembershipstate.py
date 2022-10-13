from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import identityservicemembershipspec

class IdentityServiceMembershipStateStateEnum(str, Enum):
    DEPLOYMENT_STATE_UNSPECIFIED = "DEPLOYMENT_STATE_UNSPECIFIED"
    OK = "OK"
    ERROR = "ERROR"


@dataclass_json
@dataclass
class IdentityServiceMembershipState:
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failureReason' }})
    installed_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'installedVersion' }})
    member_config: Optional[identityservicemembershipspec.IdentityServiceMembershipSpec] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memberConfig' }})
    state: Optional[IdentityServiceMembershipStateStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
