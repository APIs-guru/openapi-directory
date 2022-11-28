from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InsertTableRowRequest:
    r"""InsertTableRowRequest
    Inserts an empty row into a table.
    """
    
    insert_below: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('insertBelow') }})
    table_cell_location: Optional[TableCellLocation] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableCellLocation') }})
    
