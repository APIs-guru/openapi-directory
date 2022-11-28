from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class RetentionPolicy:
    r"""RetentionPolicy
    RetentionPolicy defines a Backup retention policy for a BackupPlan.
    """
    
    backup_delete_lock_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backupDeleteLockDays') }})
    backup_retain_days: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backupRetainDays') }})
    locked: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locked') }})
    
