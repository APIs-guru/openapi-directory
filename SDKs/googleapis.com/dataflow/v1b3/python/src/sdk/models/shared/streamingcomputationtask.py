from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import streamingcomputationranges
from . import mounteddatadisk

class StreamingComputationTaskTaskTypeEnum(str, Enum):
    STREAMING_COMPUTATION_TASK_UNKNOWN = "STREAMING_COMPUTATION_TASK_UNKNOWN"
    STREAMING_COMPUTATION_TASK_STOP = "STREAMING_COMPUTATION_TASK_STOP"
    STREAMING_COMPUTATION_TASK_START = "STREAMING_COMPUTATION_TASK_START"


@dataclass_json
@dataclass
class StreamingComputationTask:
    computation_ranges: Optional[List[streamingcomputationranges.StreamingComputationRanges]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'computationRanges' }})
    data_disks: Optional[List[mounteddatadisk.MountedDataDisk]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dataDisks' }})
    task_type: Optional[StreamingComputationTaskTaskTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'taskType' }})
    
