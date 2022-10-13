from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json

class TextFormatEnum(str, Enum):
    FORMAT_UNSPECIFIED = "FORMAT_UNSPECIFIED"
    MARKDOWN = "MARKDOWN"
    RAW = "RAW"


@dataclass_json
@dataclass
class Text:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    format: Optional[TextFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    
