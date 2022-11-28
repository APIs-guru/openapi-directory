from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class CropPropertiesSuggestionState:
    r"""CropPropertiesSuggestionState
    A mask that indicates which of the fields on the base CropProperties have been changed in this suggestion. For any field set to true, there's a new suggested value.
    """
    
    angle_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('angleSuggested') }})
    offset_bottom_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offsetBottomSuggested') }})
    offset_left_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offsetLeftSuggested') }})
    offset_right_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offsetRightSuggested') }})
    offset_top_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('offsetTopSuggested') }})
    
