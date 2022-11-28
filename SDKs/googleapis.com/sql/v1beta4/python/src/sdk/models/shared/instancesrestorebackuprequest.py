from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InstancesRestoreBackupRequest:
    r"""InstancesRestoreBackupRequest
    Database instance restore backup request.
    """
    
    restore_backup_context: Optional[RestoreBackupContext] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('restoreBackupContext') }})
    
