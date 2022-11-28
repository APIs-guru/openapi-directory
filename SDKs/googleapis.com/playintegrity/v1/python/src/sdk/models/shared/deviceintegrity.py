from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class DeviceIntegrityDeviceRecognitionVerdictEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    MEETS_BASIC_INTEGRITY = "MEETS_BASIC_INTEGRITY"
    MEETS_DEVICE_INTEGRITY = "MEETS_DEVICE_INTEGRITY"
    MEETS_STRONG_INTEGRITY = "MEETS_STRONG_INTEGRITY"
    MEETS_VIRTUAL_INTEGRITY = "MEETS_VIRTUAL_INTEGRITY"


@dataclass_json
@dataclass
class DeviceIntegrity:
    r"""DeviceIntegrity
    Contains the device attestation information.
    """
    
    device_recognition_verdict: Optional[List[DeviceIntegrityDeviceRecognitionVerdictEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceRecognitionVerdict') }})
    
