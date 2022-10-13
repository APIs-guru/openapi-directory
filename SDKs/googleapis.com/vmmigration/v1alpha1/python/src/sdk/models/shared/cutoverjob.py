from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import computeenginetargetdetails
from . import targetvmdetails
from . import status
from . import cutoverstep
from . import targetvmdetails

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
class CutoverJob:
    compute_engine_target_details: Optional[computeenginetargetdetails.ComputeEngineTargetDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'computeEngineTargetDetails' }})
    compute_engine_vm_details: Optional[targetvmdetails.TargetVMDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'computeEngineVmDetails' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    error: Optional[status.Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    progress: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progress' }})
    progress_percent: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'progressPercent' }})
    state: Optional[CutoverJobStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    state_message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateMessage' }})
    state_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateTime' }})
    steps: Optional[List[cutoverstep.CutoverStep]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'steps' }})
    target_details: Optional[targetvmdetails.TargetVMDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetDetails' }})
    
