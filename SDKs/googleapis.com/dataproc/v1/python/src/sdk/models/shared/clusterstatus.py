from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class ClusterStatusStateEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    CREATING = "CREATING"
    RUNNING = "RUNNING"
    ERROR = "ERROR"
    ERROR_DUE_TO_UPDATE = "ERROR_DUE_TO_UPDATE"
    DELETING = "DELETING"
    UPDATING = "UPDATING"
    STOPPING = "STOPPING"
    STOPPED = "STOPPED"
    STARTING = "STARTING"
    REPAIRING = "REPAIRING"

class ClusterStatusSubstateEnum(str, Enum):
    UNSPECIFIED = "UNSPECIFIED"
    UNHEALTHY = "UNHEALTHY"
    STALE_STATUS = "STALE_STATUS"


@dataclass_json
@dataclass
class ClusterStatus:
    r"""ClusterStatus
    The status of a cluster and its instances.
    """
    
    detail: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('detail') }})
    state: Optional[ClusterStatusStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    state_start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateStartTime') }})
    substate: Optional[ClusterStatusSubstateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('substate') }})
    
