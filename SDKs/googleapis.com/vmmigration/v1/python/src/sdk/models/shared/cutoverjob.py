from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CutoverJobStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    PENDING = "PENDING"
    FAILED = "FAILED"
    SUCCEEDED = "SUCCEEDED"
    CANCELLED = "CANCELLED"
    CANCELLING = "CANCELLING"
    ACTIVE = "ACTIVE"
    ADAPTING_OS = "ADAPTING_OS"


@dataclass_json
@dataclass
class CutoverJobInput:
    r"""CutoverJobInput
    CutoverJob message describes a cutover of a migrating VM. The CutoverJob is the operation of shutting down the VM, creating a snapshot and clonning the VM using the replicated snapshot.
    """
    
    compute_engine_target_details: Optional[ComputeEngineTargetDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeEngineTargetDetails') }})
    error: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    

@dataclass_json
@dataclass
class CutoverJob:
    r"""CutoverJob
    CutoverJob message describes a cutover of a migrating VM. The CutoverJob is the operation of shutting down the VM, creating a snapshot and clonning the VM using the replicated snapshot.
    """
    
    compute_engine_target_details: Optional[ComputeEngineTargetDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computeEngineTargetDetails') }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endTime') }})
    error: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    progress_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('progressPercent') }})
    state: Optional[CutoverJobStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    state_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateMessage') }})
    state_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateTime') }})
    steps: Optional[List[CutoverStep]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('steps') }})
    
