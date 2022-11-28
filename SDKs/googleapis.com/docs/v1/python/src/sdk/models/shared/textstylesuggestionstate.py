from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class TextStyleSuggestionState:
    r"""TextStyleSuggestionState
    A mask that indicates which of the fields on the base TextStyle have been changed in this suggestion. For any field set to true, there's a new suggested value.
    """
    
    background_color_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('backgroundColorSuggested') }})
    baseline_offset_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('baselineOffsetSuggested') }})
    bold_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('boldSuggested') }})
    font_size_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fontSizeSuggested') }})
    foreground_color_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('foregroundColorSuggested') }})
    italic_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('italicSuggested') }})
    link_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('linkSuggested') }})
    small_caps_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('smallCapsSuggested') }})
    strikethrough_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('strikethroughSuggested') }})
    underline_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('underlineSuggested') }})
    weighted_font_family_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weightedFontFamilySuggested') }})
    
