from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

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
    r"""Suggestion
    A suggestion.
    """
    
    subtype: Optional[SuggestionSubtypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('subtype') }})
    
