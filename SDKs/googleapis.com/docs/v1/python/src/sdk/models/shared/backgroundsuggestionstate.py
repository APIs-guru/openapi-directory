from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BackgroundSuggestionState:
    r"""BackgroundSuggestionState
    A mask that indicates which of the fields on the base Background have been changed in this suggestion. For any field set to true, the Backgound has a new suggested value.
    """
    
    background_color_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backgroundColorSuggested') }})
    
