from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class HistoryTestPlatformEnum(str, Enum):
    UNKNOWN_PLATFORM = "unknownPlatform"
    ANDROID = "android"
    IOS = "ios"


@dataclass_json
@dataclass
class History:
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    history_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'historyId' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    test_platform: Optional[HistoryTestPlatformEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'testPlatform' }})
    
