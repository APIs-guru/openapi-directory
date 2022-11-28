from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ListFindingsResultStateChangeEnum(str, Enum):
    UNUSED = "UNUSED"
    CHANGED = "CHANGED"
    UNCHANGED = "UNCHANGED"
    ADDED = "ADDED"
    REMOVED = "REMOVED"


@dataclass_json
@dataclass
class ListFindingsResult:
    r"""ListFindingsResult
    Result containing the Finding and its StateChange.
    """
    
    finding: Optional[Finding] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finding') }})
    resource: Optional[Resource] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resource') }})
    state_change: Optional[ListFindingsResultStateChangeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('stateChange') }})
    
