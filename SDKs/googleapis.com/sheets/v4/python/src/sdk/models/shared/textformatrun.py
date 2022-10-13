from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import textformat


@dataclass_json
@dataclass
class TextFormatRun:
    format: Optional[textformat.TextFormat] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'format' }})
    start_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startIndex' }})
    
