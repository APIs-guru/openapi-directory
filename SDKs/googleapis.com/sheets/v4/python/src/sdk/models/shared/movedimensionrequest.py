from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class MoveDimensionRequest:
    r"""MoveDimensionRequest
    Moves one or more rows or columns.
    """
    
    destination_index: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('destinationIndex') }})
    source: Optional[DimensionRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('source') }})
    
