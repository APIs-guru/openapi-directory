from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import notificationchannel


@dataclass_json
@dataclass
class ListNotificationChannelsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    notification_channels: Optional[List[notificationchannel.NotificationChannel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationChannels' }})
    total_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalSize' }})
    
