from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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


@dataclass_json
@dataclass
class Platform:
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    platform_type: Optional[PlatformPlatformTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platformType' }})
    
