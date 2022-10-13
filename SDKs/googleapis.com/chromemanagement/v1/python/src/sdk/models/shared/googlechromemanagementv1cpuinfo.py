from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleChromeManagementV1CPUInfoArchitectureEnum(str, Enum):
    ARCHITECTURE_UNSPECIFIED = "ARCHITECTURE_UNSPECIFIED"
    X64 = "X64"


@dataclass_json
@dataclass
class GoogleChromeManagementV1CPUInfo:
    architecture: Optional[GoogleChromeManagementV1CPUInfoArchitectureEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'architecture' }})
    keylocker_configured: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keylockerConfigured' }})
    keylocker_supported: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keylockerSupported' }})
    max_clock_speed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxClockSpeed' }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'model' }})
    
