from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TableRowStyle:
    r"""TableRowStyle
    Styles that apply to a table row.
    """
    
    min_row_height: Optional[Dimension] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minRowHeight') }})
    prevent_overflow: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('preventOverflow') }})
    table_header: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableHeader') }})
    
