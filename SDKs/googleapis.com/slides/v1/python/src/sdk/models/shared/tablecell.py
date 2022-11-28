from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TableCell:
    r"""TableCell
    Properties and contents of each table cell.
    """
    
    column_span: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnSpan') }})
    location: Optional[TableCellLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location') }})
    row_span: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowSpan') }})
    table_cell_properties: Optional[TableCellProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableCellProperties') }})
    text: Optional[TextContent] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('text') }})
    
