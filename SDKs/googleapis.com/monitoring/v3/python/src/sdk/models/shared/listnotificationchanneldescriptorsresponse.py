from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import notificationchanneldescriptor


@dataclass_json
@dataclass
class ListNotificationChannelDescriptorsResponse:
    channel_descriptors: Optional[List[notificationchanneldescriptor.NotificationChannelDescriptor]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'channelDescriptors' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
