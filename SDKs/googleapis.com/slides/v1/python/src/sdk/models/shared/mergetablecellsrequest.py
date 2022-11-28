from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MergeTableCellsRequest:
    r"""MergeTableCellsRequest
    Merges cells in a Table.
    """
    
    object_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('objectId') }})
    table_range: Optional[TableRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('tableRange') }})
    
