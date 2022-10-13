from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class RestoreDatabaseEncryptionConfigEncryptionTypeEnum(str, Enum):
    ENCRYPTION_TYPE_UNSPECIFIED = "ENCRYPTION_TYPE_UNSPECIFIED"
    USE_CONFIG_DEFAULT_OR_BACKUP_ENCRYPTION = "USE_CONFIG_DEFAULT_OR_BACKUP_ENCRYPTION"
    GOOGLE_DEFAULT_ENCRYPTION = "GOOGLE_DEFAULT_ENCRYPTION"
    CUSTOMER_MANAGED_ENCRYPTION = "CUSTOMER_MANAGED_ENCRYPTION"


@dataclass_json
@dataclass
class RestoreDatabaseEncryptionConfig:
    encryption_type: Optional[RestoreDatabaseEncryptionConfigEncryptionTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionType' }})
    kms_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kmsKeyName' }})
    
