from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class EmbeddedObjectBorderSuggestionState:
    r"""EmbeddedObjectBorderSuggestionState
    A mask that indicates which of the fields on the base EmbeddedObjectBorder have been changed in this suggestion. For any field set to true, there's a new suggested value.
    """
    
    color_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('colorSuggested') }})
    dash_style_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('dashStyleSuggested') }})
    property_state_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('propertyStateSuggested') }})
    width_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('widthSuggested') }})
    
