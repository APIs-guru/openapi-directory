from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class StreamingComputationTaskTaskTypeEnum(str, Enum):
    STREAMING_COMPUTATION_TASK_UNKNOWN = "STREAMING_COMPUTATION_TASK_UNKNOWN"
    STREAMING_COMPUTATION_TASK_STOP = "STREAMING_COMPUTATION_TASK_STOP"
    STREAMING_COMPUTATION_TASK_START = "STREAMING_COMPUTATION_TASK_START"


@dataclass_json
@dataclass
class StreamingComputationTask:
    r"""StreamingComputationTask
    A task which describes what action should be performed for the specified streaming computation ranges.
    """
    
    computation_ranges: Optional[List[StreamingComputationRanges]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computationRanges') }})
    data_disks: Optional[List[MountedDataDisk]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dataDisks') }})
    task_type: Optional[StreamingComputationTaskTaskTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('taskType') }})
    
