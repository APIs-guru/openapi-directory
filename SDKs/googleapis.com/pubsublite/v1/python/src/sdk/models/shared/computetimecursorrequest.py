from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ComputeTimeCursorRequest:
    r"""ComputeTimeCursorRequest
    Compute the corresponding cursor for a publish or event time in a topic partition.
    """
    
    partition: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('partition') }})
    target: Optional[TimeTarget] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    
