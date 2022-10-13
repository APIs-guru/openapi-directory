from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import textstyle

class AutoTextTypeEnum(str, Enum):
    TYPE_UNSPECIFIED = "TYPE_UNSPECIFIED"
    SLIDE_NUMBER = "SLIDE_NUMBER"


@dataclass_json
@dataclass
class AutoText:
    content: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'content' }})
    style: Optional[textstyle.TextStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'style' }})
    type: Optional[AutoTextTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'type' }})
    
