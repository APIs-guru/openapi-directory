from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleChromeManagementV1BrowserVersionChannelEnum(str, Enum):
    RELEASE_CHANNEL_UNSPECIFIED = "RELEASE_CHANNEL_UNSPECIFIED"
    CANARY = "CANARY"
    DEV = "DEV"
    BETA = "BETA"
    STABLE = "STABLE"

class GoogleChromeManagementV1BrowserVersionSystemEnum(str, Enum):
    DEVICE_SYSTEM_UNSPECIFIED = "DEVICE_SYSTEM_UNSPECIFIED"
    SYSTEM_OTHER = "SYSTEM_OTHER"
    SYSTEM_ANDROID = "SYSTEM_ANDROID"
    SYSTEM_IOS = "SYSTEM_IOS"
    SYSTEM_CROS = "SYSTEM_CROS"
    SYSTEM_WINDOWS = "SYSTEM_WINDOWS"
    SYSTEM_MAC = "SYSTEM_MAC"
    SYSTEM_LINUX = "SYSTEM_LINUX"


@dataclass_json
@dataclass
class GoogleChromeManagementV1BrowserVersion:
    channel: Optional[GoogleChromeManagementV1BrowserVersionChannelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channel' }})
    count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    device_os_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceOsVersion' }})
    system: Optional[GoogleChromeManagementV1BrowserVersionSystemEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'system' }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'version' }})
    
