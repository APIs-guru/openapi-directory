from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import notificationratelimit


@dataclass_json
@dataclass
class AlertStrategy:
    auto_close: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'autoClose' }})
    notification_rate_limit: Optional[notificationratelimit.NotificationRateLimit] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'notificationRateLimit' }})
    
