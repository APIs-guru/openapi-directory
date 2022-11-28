from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AlertStrategy:
    r"""AlertStrategy
    Control over how the notification channels in notification_channels are notified when this alert fires.
    """
    
    auto_close: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('autoClose') }})
    notification_rate_limit: Optional[NotificationRateLimit] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationRateLimit') }})
    
