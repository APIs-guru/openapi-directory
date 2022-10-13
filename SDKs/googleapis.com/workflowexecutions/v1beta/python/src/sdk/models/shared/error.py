from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import stacktrace


@dataclass_json
@dataclass
class Error:
    context: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'context' }})
    payload: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payload' }})
    stack_trace: Optional[stacktrace.StackTrace] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stackTrace' }})
    
