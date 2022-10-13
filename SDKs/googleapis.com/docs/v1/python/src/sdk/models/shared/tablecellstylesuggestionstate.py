from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TableCellStyleSuggestionState:
    background_color_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backgroundColorSuggested' }})
    border_bottom_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'borderBottomSuggested' }})
    border_left_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'borderLeftSuggested' }})
    border_right_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'borderRightSuggested' }})
    border_top_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'borderTopSuggested' }})
    column_span_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'columnSpanSuggested' }})
    content_alignment_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'contentAlignmentSuggested' }})
    padding_bottom_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paddingBottomSuggested' }})
    padding_left_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paddingLeftSuggested' }})
    padding_right_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paddingRightSuggested' }})
    padding_top_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'paddingTopSuggested' }})
    row_span_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rowSpanSuggested' }})
    
