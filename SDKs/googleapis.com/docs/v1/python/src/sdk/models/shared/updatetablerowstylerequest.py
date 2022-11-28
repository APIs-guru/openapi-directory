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
class UpdateTableRowStyleRequest:
    r"""UpdateTableRowStyleRequest
    Updates the TableRowStyle of rows in a table.
    """
    
    fields: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('fields') }})
    row_indices: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rowIndices') }})
    table_row_style: Optional[TableRowStyle] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableRowStyle') }})
    table_start_location: Optional[Location] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableStartLocation') }})
    
