from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class UserInvitationStateEnum(str, Enum):
    STATE_UNSPECIFIED = "STATE_UNSPECIFIED"
    NOT_YET_SENT = "NOT_YET_SENT"
    INVITED = "INVITED"
    ACCEPTED = "ACCEPTED"
    DECLINED = "DECLINED"


@dataclass_json
@dataclass
class UserInvitation:
    r"""UserInvitation
    The `UserInvitation` resource represents an email that can be sent to an unmanaged user account inviting them to join the customer's Google Workspace or Cloud Identity account. An unmanaged account shares an email address domain with the Google Workspace or Cloud Identity account but is not managed by it yet. If the user accepts the `UserInvitation`, the user account will become managed.
    """
    
    mails_sent_count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('mailsSentCount') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    state: Optional[UserInvitationStateEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('state') }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updateTime') }})
    
