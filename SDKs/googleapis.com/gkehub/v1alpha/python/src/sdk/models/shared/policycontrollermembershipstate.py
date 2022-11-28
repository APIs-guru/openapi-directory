from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class PolicyControllerMembershipStateStateEnum(str, Enum):
    LIFECYCLE_STATE_UNSPECIFIED = "LIFECYCLE_STATE_UNSPECIFIED"
    NOT_INSTALLED = "NOT_INSTALLED"
    INSTALLING = "INSTALLING"
    ACTIVE = "ACTIVE"
    UPDATING = "UPDATING"
    DECOMISSIONING = "DECOMISSIONING"
    CLUSTER_ERROR = "CLUSTER_ERROR"
    HUB_ERROR = "HUB_ERROR"
    SUSPENDED = "SUSPENDED"


@dataclass_json
@dataclass
class PolicyControllerMembershipState:
    r"""PolicyControllerMembershipState
    **Policy Controller**: State for a single cluster.
    """
    
    component_states: Optional[dict[str, PolicyControllerOnClusterState]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('componentStates') }})
    state: Optional[PolicyControllerMembershipStateStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
