from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class BranchModelResults:
    r"""BranchModelResults
    Holds results from a paged query returning BranchModel values
    """
    
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Count') }})
    data: Optional[List[BranchModel]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Data') }})
    
