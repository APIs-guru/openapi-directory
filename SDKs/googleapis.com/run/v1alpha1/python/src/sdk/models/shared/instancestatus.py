from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import instanceattemptresult


@dataclass_json
@dataclass
class InstanceStatus:
    completion_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'completionTime' }})
    failed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failed' }})
    index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'index' }})
    last_attempt_result: Optional[instanceattemptresult.InstanceAttemptResult] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastAttemptResult' }})
    last_exit_code: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastExitCode' }})
    restarted: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restarted' }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startTime' }})
    succeeded: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'succeeded' }})
    
