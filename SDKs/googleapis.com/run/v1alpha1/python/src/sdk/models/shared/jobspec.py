from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class JobSpec:
    r"""JobSpec
    JobSpec describes how the job execution will look like.
    """
    
    active_deadline_seconds: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('activeDeadlineSeconds') }})
    backoff_limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backoffLimit') }})
    completions: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('completions') }})
    parallelism: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('parallelism') }})
    template: Optional[InstanceTemplateSpec] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('template') }})
    ttl_seconds_after_finished: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ttlSecondsAfterFinished') }})
    
