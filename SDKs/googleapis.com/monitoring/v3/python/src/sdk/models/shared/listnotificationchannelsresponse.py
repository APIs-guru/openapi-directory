from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListNotificationChannelsResponse:
    r"""ListNotificationChannelsResponse
    The ListNotificationChannels response.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    notification_channels: Optional[List[NotificationChannel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationChannels') }})
    total_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalSize') }})
    
