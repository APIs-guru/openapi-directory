from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UpdateValuesResponse:
    r"""UpdateValuesResponse
    The response when updating a range of values in a spreadsheet.
    """
    
    spreadsheet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('spreadsheetId') }})
    updated_cells: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedCells') }})
    updated_columns: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedColumns') }})
    updated_data: Optional[ValueRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedData') }})
    updated_range: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedRange') }})
    updated_rows: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('updatedRows') }})
    
