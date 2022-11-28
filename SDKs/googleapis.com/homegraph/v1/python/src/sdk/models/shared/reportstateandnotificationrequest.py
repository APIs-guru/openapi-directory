from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ReportStateAndNotificationRequest:
    r"""ReportStateAndNotificationRequest
    Request type for the [`ReportStateAndNotification`](#google.home.graph.v1.HomeGraphApiService.ReportStateAndNotification) call. It may include states, notifications, or both. States and notifications are defined per `device_id` (for example, \"123\" and \"456\" in the following example). # Example ```json { \"requestId\": \"ff36a3cc-ec34-11e6-b1a0-64510650abcf\", \"agentUserId\": \"1234\", \"payload\": { \"devices\": { \"states\": { \"123\": { \"on\": true }, \"456\": { \"on\": true, \"brightness\": 10 } }, } } } ```
    """
    
    agent_user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('agentUserId') }})
    event_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('eventId') }})
    follow_up_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('followUpToken') }})
    payload: Optional[StateAndNotificationPayload] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('payload') }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestId') }})
    
