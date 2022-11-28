from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RateLimits:
    r"""RateLimits
    Rate limits. This message determines the maximum rate that tasks can be dispatched by a queue, regardless of whether the dispatch is a first task attempt or a retry. Note: The debugging command, RunTask, will run a task even if the queue has reached its RateLimits.
    """
    
    max_burst_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxBurstSize') }})
    max_concurrent_tasks: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxConcurrentTasks') }})
    max_tasks_dispatched_per_second: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxTasksDispatchedPerSecond') }})
    
