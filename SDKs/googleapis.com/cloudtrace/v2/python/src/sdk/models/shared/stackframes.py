from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StackFrames:
    r"""StackFrames
    A collection of stack frames, which can be truncated.
    """
    
    dropped_frames_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('droppedFramesCount') }})
    frame: Optional[List[StackFrame]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('frame') }})
    
