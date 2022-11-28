from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class CopyBackupEncryptionConfigEncryptionTypeEnum(str, Enum):
    ENCRYPTION_TYPE_UNSPECIFIED = "ENCRYPTION_TYPE_UNSPECIFIED"
    USE_CONFIG_DEFAULT_OR_BACKUP_ENCRYPTION = "USE_CONFIG_DEFAULT_OR_BACKUP_ENCRYPTION"
    GOOGLE_DEFAULT_ENCRYPTION = "GOOGLE_DEFAULT_ENCRYPTION"
    CUSTOMER_MANAGED_ENCRYPTION = "CUSTOMER_MANAGED_ENCRYPTION"


@dataclass_json
@dataclass
class CopyBackupEncryptionConfig:
    r"""CopyBackupEncryptionConfig
    Encryption configuration for the copied backup.
    """
    
    encryption_type: Optional[CopyBackupEncryptionConfigEncryptionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionType') }})
    kms_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kmsKeyName') }})
    
