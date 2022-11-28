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
class UpdateCellsRequest:
    r"""UpdateCellsRequest
    Updates all cells in a range with new data.
    """
    
    fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    range: Optional[GridRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    rows: Optional[List[RowData]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rows') }})
    start: Optional[GridCoordinate] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('start') }})
    
