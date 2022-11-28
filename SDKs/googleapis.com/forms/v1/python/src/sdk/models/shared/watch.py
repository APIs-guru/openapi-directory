from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
class WatchInput:
    r"""WatchInput
    A watch for events for a form. When the designated event happens, a notification will be published to the specified target. The notification's attributes will include a `formId` key that has the ID of the watched form and an `eventType` key that has the string of the type. Messages are sent with at-least-once delivery and are only dropped in extraordinary circumstances. Typically all notifications should be reliably delivered within a few seconds; however, in some situations notifications may be delayed. A watch expires seven days after it is created unless it is renewed with watches.renew
    """
    
    event_type: Optional[WatchEventTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventType') }})
    target: Optional[WatchTarget] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    

@dataclass_json
@dataclass
class Watch:
    r"""Watch
    A watch for events for a form. When the designated event happens, a notification will be published to the specified target. The notification's attributes will include a `formId` key that has the ID of the watched form and an `eventType` key that has the string of the type. Messages are sent with at-least-once delivery and are only dropped in extraordinary circumstances. Typically all notifications should be reliably delivered within a few seconds; however, in some situations notifications may be delayed. A watch expires seven days after it is created unless it is renewed with watches.renew
    """
    
    create_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('createTime') }})
    error_type: Optional[WatchErrorTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('errorType') }})
    event_type: Optional[WatchEventTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventType') }})
    expire_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('expireTime') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    state: Optional[WatchStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    target: Optional[WatchTarget] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('target') }})
    
