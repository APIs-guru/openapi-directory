from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SuggestedTableRowStyle:
    r"""SuggestedTableRowStyle
    A suggested change to a TableRowStyle.
    """
    
    table_row_style: Optional[TableRowStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableRowStyle') }})
    table_row_style_suggestion_state: Optional[TableRowStyleSuggestionState] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableRowStyleSuggestionState') }})
    
