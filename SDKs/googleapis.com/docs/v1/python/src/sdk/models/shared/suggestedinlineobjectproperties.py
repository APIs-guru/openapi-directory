from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SuggestedInlineObjectProperties:
    r"""SuggestedInlineObjectProperties
    A suggested change to InlineObjectProperties.
    """
    
    inline_object_properties: Optional[InlineObjectProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inlineObjectProperties') }})
    inline_object_properties_suggestion_state: Optional[InlineObjectPropertiesSuggestionState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inlineObjectPropertiesSuggestionState') }})
    
