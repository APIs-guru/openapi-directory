from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""Assignment
    A comment with an assignment.
    """
    
    assigned_user: Optional[User] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('assignedUser') }})
    subtype: Optional[AssignmentSubtypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subtype') }})
    
