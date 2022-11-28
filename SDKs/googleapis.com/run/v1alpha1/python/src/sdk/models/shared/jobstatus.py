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
    
    active: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('active') }})
    completion_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completionTime') }})
    conditions: Optional[List[JobCondition]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('conditions') }})
    failed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('failed') }})
    image_digest: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('imageDigest') }})
    instances: Optional[List[InstanceStatus]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instances') }})
    observed_generation: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('observedGeneration') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    succeeded: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('succeeded') }})
    
