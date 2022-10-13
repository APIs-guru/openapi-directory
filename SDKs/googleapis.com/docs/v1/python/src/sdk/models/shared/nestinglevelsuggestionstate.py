from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import textstylesuggestionstate


@dataclass_json
@dataclass
class NestingLevelSuggestionState:
    bullet_alignment_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'bulletAlignmentSuggested' }})
    glyph_format_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'glyphFormatSuggested' }})
    glyph_symbol_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'glyphSymbolSuggested' }})
    glyph_type_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'glyphTypeSuggested' }})
    indent_first_line_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indentFirstLineSuggested' }})
    indent_start_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'indentStartSuggested' }})
    start_number_suggested: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startNumberSuggested' }})
    text_style_suggestion_state: Optional[textstylesuggestionstate.TextStyleSuggestionState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'textStyleSuggestionState' }})
    
