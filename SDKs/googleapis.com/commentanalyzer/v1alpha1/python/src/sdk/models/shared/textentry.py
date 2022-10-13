from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class TextEntryTypeEnum(str, Enum):
    TEXT_TYPE_UNSPECIFIED = "TEXT_TYPE_UNSPECIFIED"
    PLAIN_TEXT = "PLAIN_TEXT"
    HTML = "HTML"


@dataclass_json
@dataclass
class TextEntry:
    text: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'text' }})
    type: Optional[TextEntryTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
