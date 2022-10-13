from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import notificationconfig


@dataclass_json
@dataclass
class ListNotificationConfigsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    notification_configs: Optional[List[notificationconfig.NotificationConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationConfigs' }})
    
