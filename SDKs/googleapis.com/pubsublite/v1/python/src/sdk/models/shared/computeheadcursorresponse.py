from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ComputeHeadCursorResponse:
    r"""ComputeHeadCursorResponse
    Response containing the head cursor for the requested topic and partition.
    """
    
    head_cursor: Optional[Cursor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headCursor') }})
    
