from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import urlrestriction

class UserListStatusEnum(str, Enum):
    STATUS_UNSPECIFIED = "STATUS_UNSPECIFIED"
    OPEN = "OPEN"
    CLOSED = "CLOSED"


@dataclass_json
@dataclass
class UserList:
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    display_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'displayName' }})
    membership_duration_days: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'membershipDurationDays' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    status: Optional[UserListStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    url_restriction: Optional[urlrestriction.URLRestriction] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'urlRestriction' }})
    
