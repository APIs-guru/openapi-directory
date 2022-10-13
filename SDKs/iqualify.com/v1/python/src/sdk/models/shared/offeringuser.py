from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import usermetadata
from . import userprofilerequest


@dataclass_json
@dataclass
class OfferingUser:
    email: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstName' }})
    is_facilitator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isFacilitator' }})
    is_marker: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isMarker' }})
    is_readonly: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isReadonly' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastName' }})
    metadata: Optional[usermetadata.UserMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    person_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'personId' }})
    profile: Optional[userprofilerequest.UserProfileRequest] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profile' }})
    send_invite: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sendInvite' }})
    send_notification_email: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sendNotificationEmail' }})
    
