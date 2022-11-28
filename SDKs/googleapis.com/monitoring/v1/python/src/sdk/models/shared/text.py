from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils

class TextFormatEnum(str, Enum):
    FORMAT_UNSPECIFIED = "FORMAT_UNSPECIFIED"
    MARKDOWN = "MARKDOWN"
    RAW = "RAW"


@dataclass_json
@dataclass
class Text:
    r"""Text
    A widget that displays textual content.
    """
    
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('content') }})
    format: Optional[TextFormatEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('format') }})
    
