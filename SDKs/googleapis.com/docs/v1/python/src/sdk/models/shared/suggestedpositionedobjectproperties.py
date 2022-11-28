from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SuggestedPositionedObjectProperties:
    r"""SuggestedPositionedObjectProperties
    A suggested change to PositionedObjectProperties.
    """
    
    positioned_object_properties: Optional[PositionedObjectProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('positionedObjectProperties') }})
    positioned_object_properties_suggestion_state: Optional[PositionedObjectPropertiesSuggestionState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('positionedObjectPropertiesSuggestionState') }})
    
