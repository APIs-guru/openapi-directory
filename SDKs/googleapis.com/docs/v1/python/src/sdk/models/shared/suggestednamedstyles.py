from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import namedstyles
from . import namedstylessuggestionstate


@dataclass_json
@dataclass
class SuggestedNamedStyles:
    named_styles: Optional[namedstyles.NamedStyles] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namedStyles' }})
    named_styles_suggestion_state: Optional[namedstylessuggestionstate.NamedStylesSuggestionState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namedStylesSuggestionState' }})
    
