from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleCloudMlV1Scheduling:
    r"""GoogleCloudMlV1Scheduling
    All parameters related to scheduling of training jobs.
    """
    
    max_running_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxRunningTime') }})
    max_wait_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxWaitTime') }})
    priority: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('priority') }})
    
