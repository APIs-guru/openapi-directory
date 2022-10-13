from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleChromeManagementV1BootPerformanceReportShutdownReasonEnum(str, Enum):
    SHUTDOWN_REASON_UNSPECIFIED = "SHUTDOWN_REASON_UNSPECIFIED"
    USER_REQUEST = "USER_REQUEST"
    SYSTEM_UPDATE = "SYSTEM_UPDATE"
    LOW_BATTERY = "LOW_BATTERY"
    OTHER = "OTHER"


@dataclass_json
@dataclass
class GoogleChromeManagementV1BootPerformanceReport:
    boot_up_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bootUpDuration' }})
    boot_up_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bootUpTime' }})
    report_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'reportTime' }})
    shutdown_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shutdownDuration' }})
    shutdown_reason: Optional[GoogleChromeManagementV1BootPerformanceReportShutdownReasonEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shutdownReason' }})
    shutdown_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shutdownTime' }})
    
