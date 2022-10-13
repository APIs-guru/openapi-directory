from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import computeenginetargetdetails
from . import status

class CloneJobStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    PENDING = "PENDING"
    ACTIVE = "ACTIVE"
    FAILED = "FAILED"
    SUCCEEDED = "SUCCEEDED"
    CANCELLED = "CANCELLED"
    CANCELLING = "CANCELLING"
    ADAPTING_OS = "ADAPTING_OS"


@dataclass_json
@dataclass
class CloneJob:
    compute_engine_target_details: Optional[computeenginetargetdetails.ComputeEngineTargetDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'computeEngineTargetDetails' }})
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'endTime' }})
    error: Optional[status.Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    state: Optional[CloneJobStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    state_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateTime' }})
    
