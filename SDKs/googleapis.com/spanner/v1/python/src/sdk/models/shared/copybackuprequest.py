from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CopyBackupRequest:
    r"""CopyBackupRequest
    The request for CopyBackup.
    """
    
    backup_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backupId') }})
    encryption_config: Optional[CopyBackupEncryptionConfig] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionConfig') }})
    expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expireTime') }})
    source_backup: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceBackup') }})
    
