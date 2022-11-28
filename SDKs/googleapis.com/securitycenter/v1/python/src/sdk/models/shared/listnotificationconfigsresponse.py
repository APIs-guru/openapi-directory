from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListNotificationConfigsResponse:
    r"""ListNotificationConfigsResponse
    Response message for listing notification configs.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    notification_configs: Optional[List[NotificationConfig]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('notificationConfigs') }})
    
