from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleChromeManagementV1BootPerformanceReportShutdownReasonEnum(str, Enum):
    SHUTDOWN_REASON_UNSPECIFIED = "SHUTDOWN_REASON_UNSPECIFIED"
    USER_REQUEST = "USER_REQUEST"
    SYSTEM_UPDATE = "SYSTEM_UPDATE"
    LOW_BATTERY = "LOW_BATTERY"
    OTHER = "OTHER"


@dataclass_json
@dataclass
class GoogleChromeManagementV1BootPerformanceReport:
    r"""GoogleChromeManagementV1BootPerformanceReport
    Boot performance report of a device. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceBootMode](https://chromeenterprise.google/policies/#ReportDeviceBootMode) * Data Collection Frequency: On every boot up event * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: Yes * Reported for affiliated users only: N/A
    """
    
    boot_up_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bootUpDuration') }})
    boot_up_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bootUpTime') }})
    report_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('reportTime') }})
    shutdown_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shutdownDuration') }})
    shutdown_reason: Optional[GoogleChromeManagementV1BootPerformanceReportShutdownReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shutdownReason') }})
    shutdown_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shutdownTime') }})
    
