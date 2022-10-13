from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class MobileAppDirectoryEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    APPLE_APP_STORE = "APPLE_APP_STORE"
    GOOGLE_PLAY_STORE = "GOOGLE_PLAY_STORE"
    ROKU_APP_STORE = "ROKU_APP_STORE"
    AMAZON_FIRETV_APP_STORE = "AMAZON_FIRETV_APP_STORE"
    PLAYSTATION_APP_STORE = "PLAYSTATION_APP_STORE"
    APPLE_TV_APP_STORE = "APPLE_TV_APP_STORE"
    XBOX_APP_STORE = "XBOX_APP_STORE"
    SAMSUNG_TV_APP_STORE = "SAMSUNG_TV_APP_STORE"
    ANDROID_TV_APP_STORE = "ANDROID_TV_APP_STORE"
    GENERIC_CTV_APP_STORE = "GENERIC_CTV_APP_STORE"


@dataclass_json
@dataclass
class MobileApp:
    directory: Optional[MobileAppDirectoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directory' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    publisher_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publisherName' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
