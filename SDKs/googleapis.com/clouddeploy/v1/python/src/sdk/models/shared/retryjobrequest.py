from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RetryJobRequest:
    r"""RetryJobRequest
    RetryJobRequest is the request object used by `RetryJob`.
    """
    
    job_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('jobId') }})
    phase_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('phaseId') }})
    
