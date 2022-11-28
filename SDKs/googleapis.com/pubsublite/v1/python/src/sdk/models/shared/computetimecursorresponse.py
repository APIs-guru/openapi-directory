from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ComputeTimeCursorResponse:
    r"""ComputeTimeCursorResponse
    Response containing the cursor corresponding to a publish or event time in a topic partition.
    """
    
    cursor: Optional[Cursor] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('cursor') }})
    
