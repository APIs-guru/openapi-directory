from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ComputeMessageStatsRequest:
    r"""ComputeMessageStatsRequest
    Compute statistics about a range of messages in a given topic and partition.
    """
    
    end_cursor: Optional[Cursor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('endCursor') }})
    partition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partition') }})
    start_cursor: Optional[Cursor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startCursor') }})
    
