from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class TextEntryTypeEnum(str, Enum):
    TEXT_TYPE_UNSPECIFIED = "TEXT_TYPE_UNSPECIFIED"
    PLAIN_TEXT = "PLAIN_TEXT"
    HTML = "HTML"


@dataclass_json
@dataclass
class TextEntry:
    r"""TextEntry
    Represents a body of text.
    """
    
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    type: Optional[TextEntryTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('type') }})
    
