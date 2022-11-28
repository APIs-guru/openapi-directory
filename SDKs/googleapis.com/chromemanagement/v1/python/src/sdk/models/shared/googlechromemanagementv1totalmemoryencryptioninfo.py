from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""GoogleChromeManagementV1TotalMemoryEncryptionInfo
    Memory encryption information of a device. * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceMemoryInfo](https://chromeenterprise.google/policies/#ReportDeviceMemoryInfo) * Data Collection Frequency: At device startup * Default Data Reporting Frequency: At device startup - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A
    """
    
    encryption_algorithm: Optional[GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionAlgorithmEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionAlgorithm') }})
    encryption_state: Optional[GoogleChromeManagementV1TotalMemoryEncryptionInfoEncryptionStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('encryptionState') }})
    key_length: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyLength') }})
    max_keys: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxKeys') }})
    
