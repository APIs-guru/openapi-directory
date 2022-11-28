from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ComputeSchedulingOnHostMaintenanceEnum(str, Enum):
    ON_HOST_MAINTENANCE_UNSPECIFIED = "ON_HOST_MAINTENANCE_UNSPECIFIED"
    TERMINATE = "TERMINATE"
    MIGRATE = "MIGRATE"

class ComputeSchedulingRestartTypeEnum(str, Enum):
    RESTART_TYPE_UNSPECIFIED = "RESTART_TYPE_UNSPECIFIED"
    AUTOMATIC_RESTART = "AUTOMATIC_RESTART"
    NO_AUTOMATIC_RESTART = "NO_AUTOMATIC_RESTART"


@dataclass_json
@dataclass
class ComputeScheduling:
    r"""ComputeScheduling
    Scheduling information for VM on maintenance/restart behaviour and node allocation in sole tenant nodes.
    """
    
    automatic_restart: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('automaticRestart') }})
    min_node_cpus: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minNodeCpus') }})
    node_affinities: Optional[List[SchedulingNodeAffinity]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nodeAffinities') }})
    on_host_maintenance: Optional[ComputeSchedulingOnHostMaintenanceEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('onHostMaintenance') }})
    restart_type: Optional[ComputeSchedulingRestartTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restartType') }})
    
