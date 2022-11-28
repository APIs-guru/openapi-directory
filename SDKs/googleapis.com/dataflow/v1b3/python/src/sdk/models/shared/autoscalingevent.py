from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class AutoscalingEventEventTypeEnum(str, Enum):
    TYPE_UNKNOWN = "TYPE_UNKNOWN"
    TARGET_NUM_WORKERS_CHANGED = "TARGET_NUM_WORKERS_CHANGED"
    CURRENT_NUM_WORKERS_CHANGED = "CURRENT_NUM_WORKERS_CHANGED"
    ACTUATION_FAILURE = "ACTUATION_FAILURE"
    NO_CHANGE = "NO_CHANGE"


@dataclass_json
@dataclass
class AutoscalingEvent:
    r"""AutoscalingEvent
    A structured message reporting an autoscaling decision made by the Dataflow service.
    """
    
    current_num_workers: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('currentNumWorkers') }})
    description: Optional[StructuredMessage] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('description') }})
    event_type: Optional[AutoscalingEventEventTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventType') }})
    target_num_workers: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetNumWorkers') }})
    time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('time') }})
    worker_pool: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('workerPool') }})
    
