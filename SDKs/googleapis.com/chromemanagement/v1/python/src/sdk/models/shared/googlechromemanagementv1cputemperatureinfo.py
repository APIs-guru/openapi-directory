from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleChromeManagementV1CPUTemperatureInfo:
    r"""GoogleChromeManagementV1CPUTemperatureInfo
    CPU temperature of a device. Sampled per CPU core in Celsius. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceCpuInfo](https://chromeenterprise.google/policies/#ReportDeviceCpuInfo) * Data Collection Frequency: Every 10 minutes * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
    """
    
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('label') }})
    temperature_celsius: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('temperatureCelsius') }})
    
