from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ParagraphStyleSuggestionState:
    r"""ParagraphStyleSuggestionState
    A mask that indicates which of the fields on the base ParagraphStyle have been changed in this suggestion. For any field set to true, there's a new suggested value.
    """
    
    alignment_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alignmentSuggested') }})
    avoid_widow_and_orphan_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avoidWidowAndOrphanSuggested') }})
    border_between_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('borderBetweenSuggested') }})
    border_bottom_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('borderBottomSuggested') }})
    border_left_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('borderLeftSuggested') }})
    border_right_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('borderRightSuggested') }})
    border_top_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('borderTopSuggested') }})
    direction_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('directionSuggested') }})
    heading_id_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headingIdSuggested') }})
    indent_end_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indentEndSuggested') }})
    indent_first_line_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indentFirstLineSuggested') }})
    indent_start_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indentStartSuggested') }})
    keep_lines_together_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keepLinesTogetherSuggested') }})
    keep_with_next_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keepWithNextSuggested') }})
    line_spacing_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lineSpacingSuggested') }})
    named_style_type_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('namedStyleTypeSuggested') }})
    page_break_before_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pageBreakBeforeSuggested') }})
    shading_suggestion_state: Optional[ShadingSuggestionState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('shadingSuggestionState') }})
    space_above_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spaceAboveSuggested') }})
    space_below_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spaceBelowSuggested') }})
    spacing_mode_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spacingModeSuggested') }})
    
