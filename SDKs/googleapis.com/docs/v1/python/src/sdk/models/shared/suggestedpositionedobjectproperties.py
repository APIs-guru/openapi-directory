from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import positionedobjectproperties
from . import positionedobjectpropertiessuggestionstate


@dataclass_json
@dataclass
class SuggestedPositionedObjectProperties:
    positioned_object_properties: Optional[positionedobjectproperties.PositionedObjectProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'positionedObjectProperties' }})
    positioned_object_properties_suggestion_state: Optional[positionedobjectpropertiessuggestionstate.PositionedObjectPropertiesSuggestionState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'positionedObjectPropertiesSuggestionState' }})
    
