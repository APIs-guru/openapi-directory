from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class Move:
    r"""Move
    An object was moved.
    """
    
    added_parents: Optional[List[TargetReference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addedParents') }})
    removed_parents: Optional[List[TargetReference]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('removedParents') }})
    
