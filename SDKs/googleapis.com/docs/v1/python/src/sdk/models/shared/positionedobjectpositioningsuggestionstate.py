from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class PositionedObjectPositioningSuggestionState:
    r"""PositionedObjectPositioningSuggestionState
    A mask that indicates which of the fields on the base PositionedObjectPositioning have been changed in this suggestion. For any field set to true, there's a new suggested value.
    """
    
    layout_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('layoutSuggested') }})
    left_offset_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('leftOffsetSuggested') }})
    top_offset_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('topOffsetSuggested') }})
    
