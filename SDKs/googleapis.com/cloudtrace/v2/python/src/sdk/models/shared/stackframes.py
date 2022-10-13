from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import stackframe


@dataclass_json
@dataclass
class StackFrames:
    dropped_frames_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'droppedFramesCount' }})
    frame: Optional[List[stackframe.StackFrame]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'frame' }})
    
