from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class JobStatus:
    r"""JobStatus
    JobStatus represents the current state of a Job.
    """
    
    conditions: Optional[List[GoogleCloudRunV1Condition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditions') }})
    execution_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('executionCount') }})
    latest_created_execution: Optional[ExecutionReference] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latestCreatedExecution') }})
    observed_generation: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('observedGeneration') }})
    
