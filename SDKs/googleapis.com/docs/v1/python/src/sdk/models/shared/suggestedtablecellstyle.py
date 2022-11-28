from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SuggestedTableCellStyle:
    r"""SuggestedTableCellStyle
    A suggested change to a TableCellStyle.
    """
    
    table_cell_style: Optional[TableCellStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableCellStyle') }})
    table_cell_style_suggestion_state: Optional[TableCellStyleSuggestionState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableCellStyleSuggestionState') }})
    
