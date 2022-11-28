from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class BatchClearValuesByDataFilterResponse:
    r"""BatchClearValuesByDataFilterResponse
    The response when clearing a range of values selected with DataFilters in a spreadsheet.
    """
    
    cleared_ranges: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clearedRanges') }})
    spreadsheet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spreadsheetId') }})
    
