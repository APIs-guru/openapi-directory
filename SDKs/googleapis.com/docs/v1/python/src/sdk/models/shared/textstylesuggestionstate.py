from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TextStyleSuggestionState:
    background_color_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'backgroundColorSuggested' }})
    baseline_offset_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baselineOffsetSuggested' }})
    bold_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'boldSuggested' }})
    font_size_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fontSizeSuggested' }})
    foreground_color_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'foregroundColorSuggested' }})
    italic_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'italicSuggested' }})
    link_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'linkSuggested' }})
    small_caps_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'smallCapsSuggested' }})
    strikethrough_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'strikethroughSuggested' }})
    underline_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'underlineSuggested' }})
    weighted_font_family_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'weightedFontFamilySuggested' }})
    
