from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class QueueStats:
    concurrent_dispatches_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'concurrentDispatchesCount' }})
    effective_execution_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'effectiveExecutionRate' }})
    executed_last_minute_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executedLastMinuteCount' }})
    oldest_estimated_arrival_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'oldestEstimatedArrivalTime' }})
    tasks_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tasksCount' }})
    
