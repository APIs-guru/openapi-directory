from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import textstyle


@dataclass_json
@dataclass
class Bullet:
    list_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listId' }})
    nesting_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nestingLevel' }})
    text_style: Optional[textstyle.TextStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textStyle' }})
    
