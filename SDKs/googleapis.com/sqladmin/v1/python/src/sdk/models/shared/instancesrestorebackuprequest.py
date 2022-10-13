from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import restorebackupcontext


@dataclass_json
@dataclass
class InstancesRestoreBackupRequest:
    restore_backup_context: Optional[restorebackupcontext.RestoreBackupContext] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restoreBackupContext' }})
    
