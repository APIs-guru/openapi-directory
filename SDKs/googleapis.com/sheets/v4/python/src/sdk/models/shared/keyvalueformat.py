from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import textposition
from . import textformat


@dataclass_json
@dataclass
class KeyValueFormat:
    position: Optional[textposition.TextPosition] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'position' }})
    text_format: Optional[textformat.TextFormat] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textFormat' }})
    
