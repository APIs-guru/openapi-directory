from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class URLNotificationTypeEnum(str, Enum):
    URL_NOTIFICATION_TYPE_UNSPECIFIED = "URL_NOTIFICATION_TYPE_UNSPECIFIED"
    URL_UPDATED = "URL_UPDATED"
    URL_DELETED = "URL_DELETED"


@dataclass_json
@dataclass
class URLNotification:
    notify_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notifyTime' }})
    type: Optional[URLNotificationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'url' }})
    
