from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EventAttendee:
    additional_guests: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'additionalGuests' }})
    comment: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'comment' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    optional: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'optional' }})
    organizer: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organizer' }})
    resource: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource' }})
    response_status: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'responseStatus' }})
    self: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    
