from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import key


@dataclass_json
@dataclass
class MutationResult:
    conflict_detected: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'conflictDetected' }})
    key: Optional[key.Key] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'key' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
