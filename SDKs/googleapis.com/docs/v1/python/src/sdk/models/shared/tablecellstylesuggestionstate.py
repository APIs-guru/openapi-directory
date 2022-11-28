from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TableCellStyleSuggestionState:
    r"""TableCellStyleSuggestionState
    A mask that indicates which of the fields on the base TableCellStyle have been changed in this suggestion. For any field set to true, there's a new suggested value.
    """
    
    background_color_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backgroundColorSuggested') }})
    border_bottom_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('borderBottomSuggested') }})
    border_left_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('borderLeftSuggested') }})
    border_right_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('borderRightSuggested') }})
    border_top_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('borderTopSuggested') }})
    column_span_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnSpanSuggested') }})
    content_alignment_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('contentAlignmentSuggested') }})
    padding_bottom_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paddingBottomSuggested') }})
    padding_left_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paddingLeftSuggested') }})
    padding_right_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paddingRightSuggested') }})
    padding_top_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('paddingTopSuggested') }})
    row_span_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowSpanSuggested') }})
    
