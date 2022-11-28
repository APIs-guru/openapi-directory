from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class URLNotificationTypeEnum(str, Enum):
    URL_NOTIFICATION_TYPE_UNSPECIFIED = "URL_NOTIFICATION_TYPE_UNSPECIFIED"
    URL_UPDATED = "URL_UPDATED"
    URL_DELETED = "URL_DELETED"


@dataclass_json
@dataclass
class URLNotification:
    r"""URLNotification
    `UrlNotification` is the resource used in all Indexing API calls. It describes one event in the life cycle of a Web Document.
    """
    
    notify_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notifyTime') }})
    type: Optional[URLNotificationTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('url') }})
    
