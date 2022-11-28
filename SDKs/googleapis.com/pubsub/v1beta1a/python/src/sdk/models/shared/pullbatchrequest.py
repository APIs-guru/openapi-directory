from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PullBatchRequest:
    r"""PullBatchRequest
    Request for the PullBatch method.
    """
    
    max_events: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxEvents') }})
    return_immediately: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('returnImmediately') }})
    subscription: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subscription') }})
    
