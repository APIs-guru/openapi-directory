from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListPropertiesSuggestionState:
    r"""ListPropertiesSuggestionState
    A mask that indicates which of the fields on the base ListProperties have been changed in this suggestion. For any field set to true, there's a new suggested value.
    """
    
    nesting_levels_suggestion_states: Optional[List[NestingLevelSuggestionState]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nestingLevelsSuggestionStates') }})
    
