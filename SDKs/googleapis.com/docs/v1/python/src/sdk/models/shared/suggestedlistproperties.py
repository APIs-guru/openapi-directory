from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SuggestedListProperties:
    r"""SuggestedListProperties
    A suggested change to ListProperties.
    """
    
    list_properties: Optional[ListProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listProperties') }})
    list_properties_suggestion_state: Optional[ListPropertiesSuggestionState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('listPropertiesSuggestionState') }})
    
