from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AppendCellsRequest:
    r"""AppendCellsRequest
    Adds new cells after the last row with data in a sheet, inserting new rows into the sheet if necessary.
    """
    
    fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    rows: Optional[List[RowData]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rows') }})
    sheet_id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sheetId') }})
    
