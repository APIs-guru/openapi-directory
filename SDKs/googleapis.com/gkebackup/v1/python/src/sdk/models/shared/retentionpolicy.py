from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RetentionPolicy:
    backup_delete_lock_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backupDeleteLockDays' }})
    backup_retain_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backupRetainDays' }})
    locked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locked' }})
    
