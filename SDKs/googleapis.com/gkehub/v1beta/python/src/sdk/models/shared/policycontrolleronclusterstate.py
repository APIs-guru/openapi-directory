from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PolicyControllerOnClusterStateStateEnum(str, Enum):
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
class PolicyControllerOnClusterState:
    r"""PolicyControllerOnClusterState
    OnClusterState represents the state of a sub-component of Policy Controller.
    """
    
    details: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    state: Optional[PolicyControllerOnClusterStateStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    
