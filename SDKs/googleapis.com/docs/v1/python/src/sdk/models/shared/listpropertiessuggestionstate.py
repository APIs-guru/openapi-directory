from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import nestinglevelsuggestionstate


@dataclass_json
@dataclass
class ListPropertiesSuggestionState:
    nesting_levels_suggestion_states: Optional[List[nestinglevelsuggestionstate.NestingLevelSuggestionState]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nestingLevelsSuggestionStates' }})
    
