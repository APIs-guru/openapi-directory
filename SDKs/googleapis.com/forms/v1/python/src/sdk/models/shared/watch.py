from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import watchtarget

class WatchErrorTypeEnum(str, Enum):
    ERROR_TYPE_UNSPECIFIED = "ERROR_TYPE_UNSPECIFIED"
    PROJECT_NOT_AUTHORIZED = "PROJECT_NOT_AUTHORIZED"
    NO_USER_ACCESS = "NO_USER_ACCESS"
    OTHER_ERRORS = "OTHER_ERRORS"

class WatchEventTypeEnum(str, Enum):
    EVENT_TYPE_UNSPECIFIED = "EVENT_TYPE_UNSPECIFIED"
    SCHEMA = "SCHEMA"
    RESPONSES = "RESPONSES"

class WatchStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    ACTIVE = "ACTIVE"
    SUSPENDED = "SUSPENDED"


@dataclass_json
@dataclass
class Watch:
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'createTime' }})
    error_type: Optional[WatchErrorTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'errorType' }})
    event_type: Optional[WatchEventTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventType' }})
    expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'expireTime' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    state: Optional[WatchStateEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    target: Optional[watchtarget.WatchTarget] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'target' }})
    
