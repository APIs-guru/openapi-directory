from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InstanceStatus:
    r"""InstanceStatus
    Instance represents the status of an instance of a Job.
    """
    
    completion_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completionTime') }})
    failed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failed') }})
    index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('index') }})
    last_attempt_result: Optional[InstanceAttemptResult] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastAttemptResult') }})
    last_exit_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastExitCode') }})
    restarted: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restarted') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    succeeded: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('succeeded') }})
    
