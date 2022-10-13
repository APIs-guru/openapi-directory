from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import listproperties
from . import listpropertiessuggestionstate


@dataclass_json
@dataclass
class SuggestedListProperties:
    list_properties: Optional[listproperties.ListProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listProperties' }})
    list_properties_suggestion_state: Optional[listpropertiessuggestionstate.ListPropertiesSuggestionState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'listPropertiesSuggestionState' }})
    
