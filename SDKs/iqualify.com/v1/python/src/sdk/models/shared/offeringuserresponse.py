from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import userprofile


@dataclass_json
@dataclass
class OfferingUserResponse:
    avatar_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avatarUrl' }})
    email: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'email' }})
    evaluated_by: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evaluatedBy' }})
    evaluates: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'evaluates' }})
    first_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'firstName' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    is_facilitator: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isFacilitator' }})
    is_marker: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isMarker' }})
    is_readonly: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'isReadonly' }})
    last_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lastName' }})
    marked_by: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'markedBy' }})
    marks: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'marks' }})
    person_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'personId' }})
    profile: Optional[userprofile.UserProfile] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'profile' }})
    
