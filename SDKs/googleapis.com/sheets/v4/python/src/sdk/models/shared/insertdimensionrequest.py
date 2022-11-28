from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class InsertDimensionRequest:
    r"""InsertDimensionRequest
    Inserts rows or columns in a sheet at a particular index.
    """
    
    inherit_from_before: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('inheritFromBefore') }})
    range: Optional[DimensionRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    
