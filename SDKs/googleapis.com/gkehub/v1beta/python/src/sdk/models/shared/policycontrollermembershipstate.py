from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import policycontrolleronclusterstate

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
    cluster_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clusterName' }})
    component_states: Optional[dict[str, policycontrolleronclusterstate.PolicyControllerOnClusterState]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'componentStates' }})
    state: Optional[PolicyControllerMembershipStateStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
