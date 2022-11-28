from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DeleteDimensionGroupRequest:
    r"""DeleteDimensionGroupRequest
    Deletes a group over the specified range by decrementing the depth of the dimensions in the range. For example, assume the sheet has a depth-1 group over B:E and a depth-2 group over C:D. Deleting a group over D:E leaves the sheet with a depth-1 group over B:D and a depth-2 group over C:C.
    """
    
    range: Optional[DimensionRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    
