from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleChromeManagementV1CPUInfoArchitectureEnum(str, Enum):
    ARCHITECTURE_UNSPECIFIED = "ARCHITECTURE_UNSPECIFIED"
    X64 = "X64"


@dataclass_json
@dataclass
class GoogleChromeManagementV1CPUInfo:
    r"""GoogleChromeManagementV1CPUInfo
    CPU specifications for the device * This field provides device information, which is static and will not change over time. * Data for this field is controlled via policy: [ReportDeviceCpuInfo](https://chromeenterprise.google/policies/#ReportDeviceCpuInfo) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
    """
    
    architecture: Optional[GoogleChromeManagementV1CPUInfoArchitectureEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('architecture') }})
    keylocker_configured: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keylockerConfigured') }})
    keylocker_supported: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keylockerSupported') }})
    max_clock_speed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxClockSpeed') }})
    model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('model') }})
    
