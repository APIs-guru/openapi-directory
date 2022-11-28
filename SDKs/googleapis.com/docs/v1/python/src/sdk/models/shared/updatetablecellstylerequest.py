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
class UpdateTableCellStyleRequest:
    r"""UpdateTableCellStyleRequest
    Updates the style of a range of table cells.
    """
    
    fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    table_cell_style: Optional[TableCellStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableCellStyle') }})
    table_range: Optional[TableRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableRange') }})
    table_start_location: Optional[Location] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableStartLocation') }})
    
