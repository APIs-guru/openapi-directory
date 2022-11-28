from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BatchUpdateSpreadsheetRequest:
    r"""BatchUpdateSpreadsheetRequest
    The request for updating any aspect of a spreadsheet.
    """
    
    include_spreadsheet_in_response: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('includeSpreadsheetInResponse') }})
    requests: Optional[List[Request]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requests') }})
    response_include_grid_data: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseIncludeGridData') }})
    response_ranges: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responseRanges') }})
    
