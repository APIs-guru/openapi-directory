from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PlatformPlatformTypeEnum(str, Enum):
    PLATFORM_TYPE_UNSPECIFIED = "PLATFORM_TYPE_UNSPECIFIED"
    WIN = "WIN"
    WIN64 = "WIN64"
    MAC = "MAC"
    LINUX = "LINUX"
    ANDROID = "ANDROID"
    WEBVIEW = "WEBVIEW"
    IOS = "IOS"
    ALL = "ALL"
    MAC_ARM64 = "MAC_ARM64"
    LACROS = "LACROS"
    LACROS_ARM32 = "LACROS_ARM32"
    CHROMEOS = "CHROMEOS"
    LACROS_ARM64 = "LACROS_ARM64"
    FUCHSIA = "FUCHSIA"


@dataclass_json
@dataclass
class Platform:
    r"""Platform
    Each Platform is owned by a Product and owns a collection of channels. Available platforms are listed in Platform enum below. Not all Channels are available for every Platform (e.g. CANARY does not exist for LINUX).
    """
    
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    platform_type: Optional[PlatformPlatformTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('platformType') }})
    
