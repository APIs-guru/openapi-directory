from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StackTrace:
    r"""StackTrace
    A call stack appearing in a trace.
    """
    
    stack_frames: Optional[StackFrames] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stackFrames') }})
    stack_trace_hash_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stackTraceHashId') }})
    
