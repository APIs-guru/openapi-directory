from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import embeddedobjectsuggestionstate


@dataclass_json
@dataclass
class InlineObjectPropertiesSuggestionState:
    embedded_object_suggestion_state: Optional[embeddedobjectsuggestionstate.EmbeddedObjectSuggestionState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'embeddedObjectSuggestionState' }})
    
