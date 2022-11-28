from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""UtilizationReport
    Utilization report details the utilization (CPU, memory, etc.) of selected source VMs.
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    error: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    frame_end_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frameEndTime') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state: Optional[UtilizationReportStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    state_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateTime') }})
    time_frame: Optional[UtilizationReportTimeFrameEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeFrame') }})
    vm_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vmCount') }})
    vms: Optional[List[VMUtilizationInfo]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vms') }})
    

@dataclass_json
@dataclass
class UtilizationReportInput:
    r"""UtilizationReportInput
    Utilization report details the utilization (CPU, memory, etc.) of selected source VMs.
    """
    
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('displayName') }})
    error: Optional[Status] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('error') }})
    time_frame: Optional[UtilizationReportTimeFrameEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('timeFrame') }})
    vms: Optional[List[VMUtilizationInfoInput]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vms') }})
    
