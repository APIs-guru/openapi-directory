from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import tablecellstyle
from . import tablecellstylesuggestionstate


@dataclass_json
@dataclass
class SuggestedTableCellStyle:
    table_cell_style: Optional[tablecellstyle.TableCellStyle] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableCellStyle' }})
    table_cell_style_suggestion_state: Optional[tablecellstylesuggestionstate.TableCellStyleSuggestionState] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tableCellStyleSuggestionState' }})
    
