from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class EmbeddedObjectBorderSuggestionState:
    color_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'colorSuggested' }})
    dash_style_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'dashStyleSuggested' }})
    property_state_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'propertyStateSuggested' }})
    width_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'widthSuggested' }})
    
