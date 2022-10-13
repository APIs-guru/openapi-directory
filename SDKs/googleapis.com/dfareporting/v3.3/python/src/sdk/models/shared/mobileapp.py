from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class MobileAppDirectoryEnum(str, Enum):
    UNKNOWN = "UNKNOWN"
    APPLE_APP_STORE = "APPLE_APP_STORE"
    GOOGLE_PLAY_STORE = "GOOGLE_PLAY_STORE"


@dataclass_json
@dataclass
class MobileApp:
    directory: Optional[MobileAppDirectoryEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directory' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    publisher_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publisherName' }})
    title: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'title' }})
    
