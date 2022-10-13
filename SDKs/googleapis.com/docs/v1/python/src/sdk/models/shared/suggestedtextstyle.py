from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import textstyle
from . import textstylesuggestionstate


@dataclass_json
@dataclass
class SuggestedTextStyle:
    text_style: Optional[textstyle.TextStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textStyle' }})
    text_style_suggestion_state: Optional[textstylesuggestionstate.TextStyleSuggestionState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textStyleSuggestionState' }})
    
