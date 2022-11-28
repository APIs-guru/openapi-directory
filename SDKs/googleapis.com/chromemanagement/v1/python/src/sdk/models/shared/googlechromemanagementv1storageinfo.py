from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleChromeManagementV1StorageInfo:
    r"""GoogleChromeManagementV1StorageInfo
    Status data for storage. * This field is telemetry information and this will change over time as the device is utilized. * Data for this field is controlled via policy: [ReportDeviceStorageStatus](https://chromeenterprise.google/policies/#ReportDeviceStorageStatus) * Data Collection Frequency: Only at Upload * Default Data Reporting Frequency: 3 hours - Policy Controlled: Yes * Cache: If the device is offline, the collected data is stored locally, and will be reported when the device is next online: No * Reported for affiliated users only: N/A
    """
    
    available_disk_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('availableDiskBytes') }})
    total_disk_bytes: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalDiskBytes') }})
    volume: Optional[List[GoogleChromeManagementV1StorageInfoDiskVolume]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('volume') }})
    
