from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import textstyle


@dataclass_json
@dataclass
class TextRun:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    style: Optional[textstyle.TextStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'style' }})
    
