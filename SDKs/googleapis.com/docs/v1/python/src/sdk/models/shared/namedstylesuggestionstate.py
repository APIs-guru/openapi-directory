from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import paragraphstylesuggestionstate
from . import textstylesuggestionstate

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
    named_style_type: Optional[NamedStyleSuggestionStateNamedStyleTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namedStyleType' }})
    paragraph_style_suggestion_state: Optional[paragraphstylesuggestionstate.ParagraphStyleSuggestionState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paragraphStyleSuggestionState' }})
    text_style_suggestion_state: Optional[textstylesuggestionstate.TextStyleSuggestionState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textStyleSuggestionState' }})
    
