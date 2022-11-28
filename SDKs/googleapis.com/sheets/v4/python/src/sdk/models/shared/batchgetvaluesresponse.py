from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchGetValuesResponse:
    r"""BatchGetValuesResponse
    The response when retrieving more than one range of values in a spreadsheet.
    """
    
    spreadsheet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spreadsheetId') }})
    value_ranges: Optional[List[ValueRange]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('valueRanges') }})
    
