from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import inlineobjectproperties
from . import inlineobjectpropertiessuggestionstate


@dataclass_json
@dataclass
class SuggestedInlineObjectProperties:
    inline_object_properties: Optional[inlineobjectproperties.InlineObjectProperties] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inlineObjectProperties' }})
    inline_object_properties_suggestion_state: Optional[inlineobjectpropertiessuggestionstate.InlineObjectPropertiesSuggestionState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'inlineObjectPropertiesSuggestionState' }})
    
