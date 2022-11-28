from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class UnmergeCellsRequest:
    r"""UnmergeCellsRequest
    Unmerges cells in the given range.
    """
    
    range: Optional[GridRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    
