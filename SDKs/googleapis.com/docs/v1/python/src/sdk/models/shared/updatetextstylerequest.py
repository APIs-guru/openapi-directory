from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import range
from . import textstyle


@dataclass_json
@dataclass
class UpdateTextStyleRequest:
    fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fields' }})
    range: Optional[range.Range] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'range' }})
    text_style: Optional[textstyle.TextStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textStyle' }})
    
