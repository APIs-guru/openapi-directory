from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class CopyBackupEncryptionConfigEncryptionTypeEnum(str, Enum):
    ENCRYPTION_TYPE_UNSPECIFIED = "ENCRYPTION_TYPE_UNSPECIFIED"
    USE_CONFIG_DEFAULT_OR_BACKUP_ENCRYPTION = "USE_CONFIG_DEFAULT_OR_BACKUP_ENCRYPTION"
    GOOGLE_DEFAULT_ENCRYPTION = "GOOGLE_DEFAULT_ENCRYPTION"
    CUSTOMER_MANAGED_ENCRYPTION = "CUSTOMER_MANAGED_ENCRYPTION"


@dataclass_json
@dataclass
class CopyBackupEncryptionConfig:
    encryption_type: Optional[CopyBackupEncryptionConfigEncryptionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionType' }})
    kms_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmsKeyName' }})
    
