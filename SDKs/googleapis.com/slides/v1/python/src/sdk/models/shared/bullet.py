from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import textstyle


@dataclass_json
@dataclass
class Bullet:
    bullet_style: Optional[textstyle.TextStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bulletStyle' }})
    glyph: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'glyph' }})
    list_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listId' }})
    nesting_level: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nestingLevel' }})
    
