from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class GoogleChromeManagementV1OsUpdateStatusUpdateStateEnum(str, Enum):
    UPDATE_STATE_UNSPECIFIED = "UPDATE_STATE_UNSPECIFIED"
    OS_IMAGE_DOWNLOAD_NOT_STARTED = "OS_IMAGE_DOWNLOAD_NOT_STARTED"
    OS_IMAGE_DOWNLOAD_IN_PROGRESS = "OS_IMAGE_DOWNLOAD_IN_PROGRESS"
    OS_UPDATE_NEED_REBOOT = "OS_UPDATE_NEED_REBOOT"


@dataclass_json
@dataclass
class GoogleChromeManagementV1OsUpdateStatus:
    r"""GoogleChromeManagementV1OsUpdateStatus
    Contains information regarding the current OS update status. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceOsUpdateStatus](https://chromeenterprise.google/policies/#ReportDeviceOsUpdateStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
    """
    
    last_reboot_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastRebootTime') }})
    last_update_check_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdateCheckTime') }})
    last_update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastUpdateTime') }})
    new_platform_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newPlatformVersion') }})
    new_requested_platform_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('newRequestedPlatformVersion') }})
    update_state: Optional[GoogleChromeManagementV1OsUpdateStatusUpdateStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateState') }})
    
