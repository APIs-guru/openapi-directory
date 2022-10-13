from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import stateandnotificationpayload


@dataclass_json
@dataclass
class ReportStateAndNotificationRequest:
    agent_user_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'agentUserId' }})
    event_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'eventId' }})
    follow_up_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'followUpToken' }})
    payload: Optional[stateandnotificationpayload.StateAndNotificationPayload] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'payload' }})
    request_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestId' }})
    
