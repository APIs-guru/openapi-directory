from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class QueueStats:
    r"""QueueStats
    Statistics for a queue.
    """
    
    concurrent_dispatches_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('concurrentDispatchesCount') }})
    effective_execution_rate: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('effectiveExecutionRate') }})
    executed_last_minute_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executedLastMinuteCount') }})
    oldest_estimated_arrival_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('oldestEstimatedArrivalTime') }})
    tasks_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tasksCount') }})
    
