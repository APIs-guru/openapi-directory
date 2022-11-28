from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class NestingLevelSuggestionState:
    r"""NestingLevelSuggestionState
    A mask that indicates which of the fields on the base NestingLevel have been changed in this suggestion. For any field set to true, there's a new suggested value.
    """
    
    bullet_alignment_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('bulletAlignmentSuggested') }})
    glyph_format_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('glyphFormatSuggested') }})
    glyph_symbol_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('glyphSymbolSuggested') }})
    glyph_type_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('glyphTypeSuggested') }})
    indent_first_line_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indentFirstLineSuggested') }})
    indent_start_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('indentStartSuggested') }})
    start_number_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startNumberSuggested') }})
    text_style_suggestion_state: Optional[TextStyleSuggestionState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('textStyleSuggestionState') }})
    
