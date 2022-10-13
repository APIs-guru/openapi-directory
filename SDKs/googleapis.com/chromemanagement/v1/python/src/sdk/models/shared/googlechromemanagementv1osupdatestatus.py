from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleChromeManagementV1OsUpdateStatusUpdateStateEnum(str, Enum):
    UPDATE_STATE_UNSPECIFIED = "UPDATE_STATE_UNSPECIFIED"
    OS_IMAGE_DOWNLOAD_NOT_STARTED = "OS_IMAGE_DOWNLOAD_NOT_STARTED"
    OS_IMAGE_DOWNLOAD_IN_PROGRESS = "OS_IMAGE_DOWNLOAD_IN_PROGRESS"
    OS_UPDATE_NEED_REBOOT = "OS_UPDATE_NEED_REBOOT"


@dataclass_json
@dataclass
class GoogleChromeManagementV1OsUpdateStatus:
    last_reboot_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastRebootTime' }})
    last_update_check_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdateCheckTime' }})
    last_update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastUpdateTime' }})
    new_platform_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newPlatformVersion' }})
    new_requested_platform_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'newRequestedPlatformVersion' }})
    update_state: Optional[GoogleChromeManagementV1OsUpdateStatusUpdateStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateState' }})
    
