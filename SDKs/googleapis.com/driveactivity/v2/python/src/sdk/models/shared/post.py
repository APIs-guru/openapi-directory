from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

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
    subtype: Optional[PostSubtypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subtype' }})
    
