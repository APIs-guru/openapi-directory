from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import shadingsuggestionstate


@dataclass_json
@dataclass
class ParagraphStyleSuggestionState:
    alignment_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'alignmentSuggested' }})
    avoid_widow_and_orphan_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'avoidWidowAndOrphanSuggested' }})
    border_between_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'borderBetweenSuggested' }})
    border_bottom_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'borderBottomSuggested' }})
    border_left_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'borderLeftSuggested' }})
    border_right_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'borderRightSuggested' }})
    border_top_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'borderTopSuggested' }})
    direction_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'directionSuggested' }})
    heading_id_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'headingIdSuggested' }})
    indent_end_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indentEndSuggested' }})
    indent_first_line_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indentFirstLineSuggested' }})
    indent_start_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indentStartSuggested' }})
    keep_lines_together_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keepLinesTogetherSuggested' }})
    keep_with_next_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'keepWithNextSuggested' }})
    line_spacing_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'lineSpacingSuggested' }})
    named_style_type_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'namedStyleTypeSuggested' }})
    page_break_before_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'pageBreakBeforeSuggested' }})
    shading_suggestion_state: Optional[shadingsuggestionstate.ShadingSuggestionState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'shadingSuggestionState' }})
    space_above_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spaceAboveSuggested' }})
    space_below_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spaceBelowSuggested' }})
    spacing_mode_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spacingModeSuggested' }})
    
