from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class FirebaseAppInfoPlatformEnum(str, Enum):
    PLATFORM_UNSPECIFIED = "PLATFORM_UNSPECIFIED"
    IOS = "IOS"
    ANDROID = "ANDROID"
    WEB = "WEB"

class FirebaseAppInfoStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    DELETED = "DELETED"


@dataclass_json
@dataclass
class FirebaseAppInfo:
    api_key_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiKeyId' }})
    app_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appId' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    namespace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namespace' }})
    platform: Optional[FirebaseAppInfoPlatformEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'platform' }})
    state: Optional[FirebaseAppInfoStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    
