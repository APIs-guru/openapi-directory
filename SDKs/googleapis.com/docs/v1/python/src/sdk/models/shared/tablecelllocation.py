from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TableCellLocation:
    r"""TableCellLocation
    Location of a single cell within a table.
    """
    
    column_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnIndex') }})
    row_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowIndex') }})
    table_start_location: Optional[Location] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableStartLocation') }})
    
