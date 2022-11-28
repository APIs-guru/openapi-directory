from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SizeSuggestionState:
    r"""SizeSuggestionState
    A mask that indicates which of the fields on the base Size have been changed in this suggestion. For any field set to true, the Size has a new suggested value.
    """
    
    height_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('heightSuggested') }})
    width_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('widthSuggested') }})
    
