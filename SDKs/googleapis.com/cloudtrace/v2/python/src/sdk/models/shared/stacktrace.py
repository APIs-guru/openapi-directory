from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import stackframes


@dataclass_json
@dataclass
class StackTrace:
    stack_frames: Optional[stackframes.StackFrames] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stackFrames' }})
    stack_trace_hash_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stackTraceHashId' }})
    
