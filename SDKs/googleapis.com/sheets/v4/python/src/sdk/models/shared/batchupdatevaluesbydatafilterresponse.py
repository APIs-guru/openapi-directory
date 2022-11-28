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
class BatchUpdateValuesByDataFilterResponse:
    r"""BatchUpdateValuesByDataFilterResponse
    The response when updating a range of values in a spreadsheet.
    """
    
    responses: Optional[List[UpdateValuesByDataFilterResponse]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('responses') }})
    spreadsheet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spreadsheetId') }})
    total_updated_cells: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalUpdatedCells') }})
    total_updated_columns: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalUpdatedColumns') }})
    total_updated_rows: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalUpdatedRows') }})
    total_updated_sheets: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('totalUpdatedSheets') }})
    
