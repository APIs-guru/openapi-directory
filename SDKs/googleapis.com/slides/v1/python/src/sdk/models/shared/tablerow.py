from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TableRow:
    r"""TableRow
    Properties and contents of each row in a table.
    """
    
    row_height: Optional[Dimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowHeight') }})
    table_cells: Optional[List[TableCell]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableCells') }})
    table_row_properties: Optional[TableRowProperties] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableRowProperties') }})
    
