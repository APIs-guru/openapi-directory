from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

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
    r"""NamedStyle
    A named style. Paragraphs in the document can inherit their TextStyle and ParagraphStyle from this named style when they have the same named style type.
    """
    
    named_style_type: Optional[NamedStyleNamedStyleTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namedStyleType') }})
    paragraph_style: Optional[ParagraphStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paragraphStyle') }})
    text_style: Optional[TextStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textStyle') }})
    
