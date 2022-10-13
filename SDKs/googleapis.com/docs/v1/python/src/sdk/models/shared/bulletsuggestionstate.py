from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import textstylesuggestionstate


@dataclass_json
@dataclass
class BulletSuggestionState:
    list_id_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listIdSuggested' }})
    nesting_level_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nestingLevelSuggested' }})
    text_style_suggestion_state: Optional[textstylesuggestionstate.TextStyleSuggestionState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textStyleSuggestionState' }})
    
