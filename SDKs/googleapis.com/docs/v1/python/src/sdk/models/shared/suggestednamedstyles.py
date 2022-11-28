from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SuggestedNamedStyles:
    r"""SuggestedNamedStyles
    A suggested change to the NamedStyles.
    """
    
    named_styles: Optional[NamedStyles] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namedStyles') }})
    named_styles_suggestion_state: Optional[NamedStylesSuggestionState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namedStylesSuggestionState') }})
    
