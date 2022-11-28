from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleChromeManagementV1MemoryStatusReport:
    r"""GoogleChromeManagementV1MemoryStatusReport
    Contains samples of memory status reports. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceMemoryInfo](https://chromeenterprise.google/policies/#ReportDeviceMemoryInfo) * Data Collection Frequency: Only at upload, SystemRamFreeByes is collected every 10 minutes * Default Data Reporting Frequency: Every 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
    """
    
    page_faults: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageFaults') }})
    report_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportTime') }})
    sample_frequency: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sampleFrequency') }})
    system_ram_free_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('systemRamFreeBytes') }})
    
