from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
class MigratingVMInput:
    r"""MigratingVMInput
    MigratingVm describes the VM that will be migrated from a Source environment and its replication state.
    """
    
    compute_engine_target_defaults: Optional[ComputeEngineTargetDefaultsInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeEngineTargetDefaults') }})
    current_sync_info: Optional[ReplicationCycle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentSyncInfo') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    error: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    last_sync: Optional[ReplicationSync] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastSync') }})
    policy: Optional[SchedulePolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    source_vm_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceVmId') }})
    

@dataclass_json
@dataclass
class MigratingVM:
    r"""MigratingVM
    MigratingVm describes the VM that will be migrated from a Source environment and its replication state.
    """
    
    compute_engine_target_defaults: Optional[ComputeEngineTargetDefaults] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeEngineTargetDefaults') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    current_sync_info: Optional[ReplicationCycle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentSyncInfo') }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    error: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    group: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('group') }})
    labels: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('labels') }})
    last_sync: Optional[ReplicationSync] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastSync') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    policy: Optional[SchedulePolicy] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policy') }})
    recent_clone_jobs: Optional[List[CloneJob]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recentCloneJobs') }})
    recent_cutover_jobs: Optional[List[CutoverJob]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('recentCutoverJobs') }})
    source_vm_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceVmId') }})
    state: Optional[MigratingVMStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    state_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateTime') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
