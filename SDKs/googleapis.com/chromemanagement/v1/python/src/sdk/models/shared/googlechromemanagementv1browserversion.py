from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""GoogleChromeManagementV1BrowserVersion
    Describes a browser version and its install count.
    """
    
    channel: Optional[GoogleChromeManagementV1BrowserVersionChannelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('channel') }})
    count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('count') }})
    device_os_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deviceOsVersion') }})
    system: Optional[GoogleChromeManagementV1BrowserVersionSystemEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('system') }})
    version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('version') }})
    
