from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class ClearValuesResponse:
    r"""ClearValuesResponse
    The response when clearing a range of values in a spreadsheet.
    """
    
    cleared_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('clearedRange') }})
    spreadsheet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spreadsheetId') }})
    
