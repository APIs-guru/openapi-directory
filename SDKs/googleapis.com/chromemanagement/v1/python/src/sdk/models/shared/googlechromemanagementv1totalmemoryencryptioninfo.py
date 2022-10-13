from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionAlgorithmEnum(str, Enum):
    MEMORY_ENCRYPTION_ALGORITHM_UNSPECIFIED = "MEMORY_ENCRYPTION_ALGORITHM_UNSPECIFIED"
    MEMORY_ENCRYPTION_ALGORITHM_UNKNOWN = "MEMORY_ENCRYPTION_ALGORITHM_UNKNOWN"
    MEMORY_ENCRYPTION_ALGORITHM_AES_XTS_128 = "MEMORY_ENCRYPTION_ALGORITHM_AES_XTS_128"
    MEMORY_ENCRYPTION_ALGORITHM_AES_XTS_256 = "MEMORY_ENCRYPTION_ALGORITHM_AES_XTS_256"

class GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionStateEnum(str, Enum):
    MEMORY_ENCRYPTION_STATE_UNSPECIFIED = "MEMORY_ENCRYPTION_STATE_UNSPECIFIED"
    MEMORY_ENCRYPTION_STATE_UNKNOWN = "MEMORY_ENCRYPTION_STATE_UNKNOWN"
    MEMORY_ENCRYPTION_STATE_DISABLED = "MEMORY_ENCRYPTION_STATE_DISABLED"
    MEMORY_ENCRYPTION_STATE_TME = "MEMORY_ENCRYPTION_STATE_TME"
    MEMORY_ENCRYPTION_STATE_MKTME = "MEMORY_ENCRYPTION_STATE_MKTME"


@dataclass_json
@dataclass
class GoogleChromeManagementV1TotalMemoryEncryptionInfo:
    encryption_algorithm: Optional[GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionAlgorithmEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionAlgorithm' }})
    encryption_state: Optional[GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'encryptionState' }})
    key_length: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keyLength' }})
    max_keys: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxKeys' }})
    
