from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class NamedStyleSuggestionStateNamedStyleTypeEnum(str, Enum):
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
class NamedStyleSuggestionState:
    r"""NamedStyleSuggestionState
    A suggestion state of a NamedStyle message.
    """
    
    named_style_type: Optional[NamedStyleSuggestionStateNamedStyleTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namedStyleType') }})
    paragraph_style_suggestion_state: Optional[ParagraphStyleSuggestionState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paragraphStyleSuggestionState') }})
    text_style_suggestion_state: Optional[TextStyleSuggestionState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textStyleSuggestionState') }})
    
