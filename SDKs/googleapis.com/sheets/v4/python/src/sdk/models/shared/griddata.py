from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GridData:
    r"""GridData
    Data in the grid, as well as metadata about the dimensions.
    """
    
    column_metadata: Optional[List[DimensionProperties]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnMetadata') }})
    row_data: Optional[List[RowData]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowData') }})
    row_metadata: Optional[List[DimensionProperties]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowMetadata') }})
    start_column: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startColumn') }})
    start_row: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startRow') }})
    
