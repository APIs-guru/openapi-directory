from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import namedstylesuggestionstate


@dataclass_json
@dataclass
class NamedStylesSuggestionState:
    styles_suggestion_states: Optional[List[namedstylesuggestionstate.NamedStyleSuggestionState]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'stylesSuggestionStates' }})
    
