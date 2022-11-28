from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PositionedObjectPropertiesSuggestionState:
    r"""PositionedObjectPropertiesSuggestionState
    A mask that indicates which of the fields on the base PositionedObjectProperties have been changed in this suggestion. For any field set to true, there's a new suggested value.
    """
    
    embedded_object_suggestion_state: Optional[EmbeddedObjectSuggestionState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('embeddedObjectSuggestionState') }})
    positioning_suggestion_state: Optional[PositionedObjectPositioningSuggestionState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('positioningSuggestionState') }})
    
