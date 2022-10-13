from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import paragraphstyle
from . import paragraphstylesuggestionstate


@dataclass_json
@dataclass
class SuggestedParagraphStyle:
    paragraph_style: Optional[paragraphstyle.ParagraphStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paragraphStyle' }})
    paragraph_style_suggestion_state: Optional[paragraphstylesuggestionstate.ParagraphStyleSuggestionState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paragraphStyleSuggestionState' }})
    
