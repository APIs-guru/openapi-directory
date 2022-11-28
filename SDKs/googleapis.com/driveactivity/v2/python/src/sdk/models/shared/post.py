from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class PostSubtypeEnum(str, Enum):
    SUBTYPE_UNSPECIFIED = "SUBTYPE_UNSPECIFIED"
    ADDED = "ADDED"
    DELETED = "DELETED"
    REPLY_ADDED = "REPLY_ADDED"
    REPLY_DELETED = "REPLY_DELETED"
    RESOLVED = "RESOLVED"
    REOPENED = "REOPENED"


@dataclass_json
@dataclass
class Post:
    r"""Post
    A regular posted comment.
    """
    
    subtype: Optional[PostSubtypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subtype') }})
    
