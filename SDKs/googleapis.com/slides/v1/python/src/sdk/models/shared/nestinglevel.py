from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import textstyle


@dataclass_json
@dataclass
class NestingLevel:
    bullet_style: Optional[textstyle.TextStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bulletStyle' }})
    
