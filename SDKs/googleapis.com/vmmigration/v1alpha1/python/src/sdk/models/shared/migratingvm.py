from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import computeenginetargetdefaults
from . import targetvmdetails
from . import replicationcycle
from . import status
from . import replicationsync
from . import schedulepolicy
from . import clonejob
from . import cutoverjob
from . import targetvmdetails

class MigratingVMStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    PENDING = "PENDING"
    READY = "READY"
    FIRST_SYNC = "FIRST_SYNC"
    ACTIVE = "ACTIVE"
    CUTTING_OVER = "CUTTING_OVER"
    CUTOVER = "CUTOVER"
    FINAL_SYNC = "FINAL_SYNC"
    PAUSED = "PAUSED"
    FINALIZING = "FINALIZING"
    FINALIZED = "FINALIZED"
    ERROR = "ERROR"


@dataclass_json
@dataclass
class MigratingVM:
    compute_engine_target_defaults: Optional[computeenginetargetdefaults.ComputeEngineTargetDefaults] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'computeEngineTargetDefaults' }})
    compute_engine_vm_defaults: Optional[targetvmdetails.TargetVMDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'computeEngineVmDefaults' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    current_sync_info: Optional[replicationcycle.ReplicationCycle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentSyncInfo' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    error: Optional[status.Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'group' }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'labels' }})
    last_sync: Optional[replicationsync.ReplicationSync] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastSync' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    policy: Optional[schedulepolicy.SchedulePolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policy' }})
    recent_clone_jobs: Optional[List[clonejob.CloneJob]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recentCloneJobs' }})
    recent_cutover_jobs: Optional[List[cutoverjob.CutoverJob]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recentCutoverJobs' }})
    source_vm_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceVmId' }})
    state: Optional[MigratingVMStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    state_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateTime' }})
    target_defaults: Optional[targetvmdetails.TargetVMDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetDefaults' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
