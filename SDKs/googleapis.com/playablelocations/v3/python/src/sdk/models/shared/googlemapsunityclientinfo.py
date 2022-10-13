from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class GoogleMapsUnityClientInfoPlatformEnum(str, Enum):
    PLATFORM_UNSPECIFIED = "PLATFORM_UNSPECIFIED"
    EDITOR = "EDITOR"
    MAC_OS = "MAC_OS"
    WINDOWS = "WINDOWS"
    LINUX = "LINUX"
    ANDROID = "ANDROID"
    IOS = "IOS"
    WEB_GL = "WEB_GL"


@dataclass_json
@dataclass
class GoogleMapsUnityClientInfo:
    api_client: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiClient' }})
    application_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationId' }})
    application_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applicationVersion' }})
    device_model: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'deviceModel' }})
    language_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'languageCode' }})
    operating_system: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operatingSystem' }})
    operating_system_build: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operatingSystemBuild' }})
    platform: Optional[GoogleMapsUnityClientInfoPlatformEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platform' }})
    
