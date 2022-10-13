from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import embeddedobjectsuggestionstate
from . import positionedobjectpositioningsuggestionstate


@dataclass_json
@dataclass
class PositionedObjectPropertiesSuggestionState:
    embedded_object_suggestion_state: Optional[embeddedobjectsuggestionstate.EmbeddedObjectSuggestionState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'embeddedObjectSuggestionState' }})
    positioning_suggestion_state: Optional[positionedobjectpositioningsuggestionstate.PositionedObjectPositioningSuggestionState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'positioningSuggestionState' }})
    
