from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NotificationsSummaryDto:
    r"""NotificationsSummaryDto
    The notification summary DTO.
    """
    
    max_unread_notification_level: Optional[NotificationLevelEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('MaxUnreadNotificationLevel') }})
    unread_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UnreadCount') }})
    
