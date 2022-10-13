from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class SuggestionSubtypeEnum(str, Enum):
    SUBTYPE_UNSPECIFIED = "SUBTYPE_UNSPECIFIED"
    ADDED = "ADDED"
    DELETED = "DELETED"
    REPLY_ADDED = "REPLY_ADDED"
    REPLY_DELETED = "REPLY_DELETED"
    ACCEPTED = "ACCEPTED"
    REJECTED = "REJECTED"
    ACCEPT_DELETED = "ACCEPT_DELETED"
    REJECT_DELETED = "REJECT_DELETED"


@dataclass_json
@dataclass
class Suggestion:
    subtype: Optional[SuggestionSubtypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'subtype' }})
    
