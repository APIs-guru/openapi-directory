from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class OfferingUserAddResponse:
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstName') }})
    invite: Optional[Invite] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invite') }})
    is_facilitator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isFacilitator') }})
    is_marker: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isMarker') }})
    is_readonly: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isReadonly') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastName') }})
    metadata: Optional[UserMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    person_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('personId') }})
    profile: Optional[UserProfileRequest] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile') }})
    send_invite: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sendInvite') }})
    send_notification_email: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sendNotificationEmail') }})
    
