from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SubmitJobRequestInput:
    r"""SubmitJobRequestInput
    A request to submit a job.
    """
    
    job: Optional[JobInput] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('job') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    
