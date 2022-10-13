from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class SynchronizationResult:
    added: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'added' }})
    failed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'failed' }})
    ignored: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ignored' }})
    removed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'removed' }})
    status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    updated: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated' }})
    
