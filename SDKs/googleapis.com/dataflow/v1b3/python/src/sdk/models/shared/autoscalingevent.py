from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import structuredmessage

class AutoscalingEventEventTypeEnum(str, Enum):
    TYPE_UNKNOWN = "TYPE_UNKNOWN"
    TARGET_NUM_WORKERS_CHANGED = "TARGET_NUM_WORKERS_CHANGED"
    CURRENT_NUM_WORKERS_CHANGED = "CURRENT_NUM_WORKERS_CHANGED"
    ACTUATION_FAILURE = "ACTUATION_FAILURE"
    NO_CHANGE = "NO_CHANGE"


@dataclass_json
@dataclass
class AutoscalingEvent:
    current_num_workers: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'currentNumWorkers' }})
    description: Optional[structuredmessage.StructuredMessage] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    event_type: Optional[AutoscalingEventEventTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventType' }})
    target_num_workers: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'targetNumWorkers' }})
    time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'time' }})
    worker_pool: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'workerPool' }})
    
