from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class DeviceIntegrityDeviceRecognitionVerdictEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    MEETS_BASIC_INTEGRITY = "MEETS_BASIC_INTEGRITY"
    MEETS_DEVICE_INTEGRITY = "MEETS_DEVICE_INTEGRITY"
    MEETS_STRONG_INTEGRITY = "MEETS_STRONG_INTEGRITY"
    MEETS_VIRTUAL_INTEGRITY = "MEETS_VIRTUAL_INTEGRITY"


@dataclass_json
@dataclass
class DeviceIntegrity:
    device_recognition_verdict: Optional[List[DeviceIntegrityDeviceRecognitionVerdictEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceRecognitionVerdict' }})
    
