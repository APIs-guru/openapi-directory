from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import notificationlevel_enum


@dataclass_json
@dataclass
class NotificationsSummaryDto:
    max_unread_notification_level: Optional[notificationlevel_enum.NotificationLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxUnreadNotificationLevel' }})
    unread_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UnreadCount' }})
    
