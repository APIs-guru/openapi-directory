from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import user

class AssignmentSubtypeEnum(str, Enum):
    SUBTYPE_UNSPECIFIED = "SUBTYPE_UNSPECIFIED"
    ADDED = "ADDED"
    DELETED = "DELETED"
    REPLY_ADDED = "REPLY_ADDED"
    REPLY_DELETED = "REPLY_DELETED"
    RESOLVED = "RESOLVED"
    REOPENED = "REOPENED"
    REASSIGNED = "REASSIGNED"


@dataclass_json
@dataclass
class Assignment:
    assigned_user: Optional[user.User] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'assignedUser' }})
    subtype: Optional[AssignmentSubtypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subtype' }})
    
