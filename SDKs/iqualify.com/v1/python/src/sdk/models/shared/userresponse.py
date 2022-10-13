from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import invite
from . import usermetadata
from . import userprofile


@dataclass_json
@dataclass
class UserResponse:
    avatar_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avatarUrl' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    first_access_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstAccessAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstName' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    invite: Optional[invite.Invite] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'invite' }})
    last_access_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastAccessAt', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastName' }})
    metadata: Optional[usermetadata.UserMetadata] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'metadata' }})
    person_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'personId' }})
    profile: Optional[userprofile.UserProfile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profile' }})
    
