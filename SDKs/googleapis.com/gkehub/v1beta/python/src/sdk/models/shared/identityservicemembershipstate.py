from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class IdentityServiceMembershipStateStateEnum(str, Enum):
    DEPLOYMENT_STATE_UNSPECIFIED = "DEPLOYMENT_STATE_UNSPECIFIED"
    OK = "OK"
    ERROR = "ERROR"


@dataclass_json
@dataclass
class IdentityServiceMembershipState:
    r"""IdentityServiceMembershipState
    **Anthos Identity Service**: State for a single Membership.
    """
    
    failure_reason: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failureReason') }})
    installed_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('installedVersion') }})
    member_config: Optional[IdentityServiceMembershipSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('memberConfig') }})
    state: Optional[IdentityServiceMembershipStateStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
