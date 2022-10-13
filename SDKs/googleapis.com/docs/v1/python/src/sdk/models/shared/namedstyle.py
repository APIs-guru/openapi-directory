from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import paragraphstyle
from . import textstyle

class NamedStyleNamedStyleTypeEnum(str, Enum):
    NAMED_STYLE_TYPE_UNSPECIFIED = "NAMED_STYLE_TYPE_UNSPECIFIED"
    NORMAL_TEXT = "NORMAL_TEXT"
    TITLE = "TITLE"
    SUBTITLE = "SUBTITLE"
    HEADING_1 = "HEADING_1"
    HEADING_2 = "HEADING_2"
    HEADING_3 = "HEADING_3"
    HEADING_4 = "HEADING_4"
    HEADING_5 = "HEADING_5"
    HEADING_6 = "HEADING_6"


@dataclass_json
@dataclass
class NamedStyle:
    named_style_type: Optional[NamedStyleNamedStyleTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namedStyleType' }})
    paragraph_style: Optional[paragraphstyle.ParagraphStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paragraphStyle' }})
    text_style: Optional[textstyle.TextStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textStyle' }})
    
