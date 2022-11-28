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
class BatchUpdateSpreadsheetResponse:
    r"""BatchUpdateSpreadsheetResponse
    The reply for batch updating a spreadsheet.
    """
    
    replies: Optional[List[Response]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('replies') }})
    spreadsheet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spreadsheetId') }})
    updated_spreadsheet: Optional[Spreadsheet] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedSpreadsheet') }})
    
