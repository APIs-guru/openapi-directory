from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import tablerowstyle
from . import tablerowstylesuggestionstate


@dataclass_json
@dataclass
class SuggestedTableRowStyle:
    table_row_style: Optional[tablerowstyle.TableRowStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableRowStyle' }})
    table_row_style_suggestion_state: Optional[tablerowstylesuggestionstate.TableRowStyleSuggestionState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableRowStyleSuggestionState' }})
    
