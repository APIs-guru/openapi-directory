from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UserResponse:
    avatar_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avatarUrl') }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('email') }})
    first_access_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstAccessAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('firstName') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    invite: Optional[Invite] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('invite') }})
    last_access_at: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastAccessAt'), 'encoder': utils.datetimeisoformat(True), 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lastName') }})
    metadata: Optional[UserMetadata] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('metadata') }})
    person_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('personId') }})
    profile: Optional[UserProfile] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('profile') }})
    
