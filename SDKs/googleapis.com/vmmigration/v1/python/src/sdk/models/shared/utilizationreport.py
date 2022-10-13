from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import status
from . import vmutilizationinfo

class UtilizationReportStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    CREATING = "CREATING"
    SUCCEEDED = "SUCCEEDED"
    FAILED = "FAILED"

class UtilizationReportTimeFrameEnum(str, Enum):
    TIME_FRAME_UNSPECIFIED = "TIME_FRAME_UNSPECIFIED"
    WEEK = "WEEK"
    MONTH = "MONTH"
    YEAR = "YEAR"


@dataclass_json
@dataclass
class UtilizationReport:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    error: Optional[status.Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    frame_end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frameEndTime' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    state: Optional[UtilizationReportStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    state_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stateTime' }})
    time_frame: Optional[UtilizationReportTimeFrameEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'timeFrame' }})
    vm_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vmCount' }})
    vms: Optional[List[vmutilizationinfo.VMUtilizationInfo]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'vms' }})
    
