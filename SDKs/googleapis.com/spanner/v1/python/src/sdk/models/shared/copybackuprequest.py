from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import copybackupencryptionconfig


@dataclass_json
@dataclass
class CopyBackupRequest:
    backup_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backupId' }})
    encryption_config: Optional[copybackupencryptionconfig.CopyBackupEncryptionConfig] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionConfig' }})
    expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expireTime' }})
    source_backup: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceBackup' }})
    
