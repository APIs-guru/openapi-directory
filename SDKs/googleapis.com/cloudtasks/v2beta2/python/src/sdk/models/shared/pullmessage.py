from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PullMessage:
    r"""PullMessage
    The pull message contains data that can be used by the caller of LeaseTasks to process the task. This proto can only be used for tasks in a queue which has pull_target set.
    """
    
    payload: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    tag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tag') }})
    
