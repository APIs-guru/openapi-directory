from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TableRange:
    r"""TableRange
    A table range represents a reference to a subset of a table. It's important to note that the cells specified by a table range do not necessarily form a rectangle. For example, let's say we have a 3 x 3 table where all the cells of the last row are merged together. The table looks like this: [ ] A table range with table cell location = (table_start_location, row = 0, column = 0), row span = 3 and column span = 2 specifies the following cells: x x [ x x x ]
    """
    
    column_span: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnSpan') }})
    row_span: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowSpan') }})
    table_cell_location: Optional[TableCellLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableCellLocation') }})
    
