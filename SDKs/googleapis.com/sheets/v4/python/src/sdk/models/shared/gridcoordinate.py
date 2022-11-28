from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GridCoordinate:
    r"""GridCoordinate
    A coordinate in a sheet. All indexes are zero-based.
    """
    
    column_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('columnIndex') }})
    row_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowIndex') }})
    sheet_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sheetId') }})
    
