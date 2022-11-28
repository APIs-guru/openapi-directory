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
class PinTableHeaderRowsRequest:
    r"""PinTableHeaderRowsRequest
    Updates the number of pinned table header rows in a table.
    """
    
    pinned_header_rows_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pinnedHeaderRowsCount') }})
    table_start_location: Optional[Location] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableStartLocation') }})
    
