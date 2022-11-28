from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class SortRangeRequest:
    r"""SortRangeRequest
    Sorts data in rows based on a sort order per column.
    """
    
    range: Optional[GridRange] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('range') }})
    sort_specs: Optional[List[SortSpec]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sortSpecs') }})
    
