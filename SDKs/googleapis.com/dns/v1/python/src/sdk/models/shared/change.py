from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class ChangeStatusEnum(str, Enum):
    PENDING = "pending"
    DONE = "done"


@dataclass_json
@dataclass
class Change:
    r"""Change
    A Change represents a set of ResourceRecordSet additions and deletions applied atomically to a ManagedZone. ResourceRecordSets within a ManagedZone are modified by creating a new Change element in the Changes collection. In turn the Changes collection also records the past modifications to the ResourceRecordSets in a ManagedZone. The current state of the ManagedZone is the sum effect of applying all Change elements in the Changes collection in sequence.
    """
    
    additions: Optional[List[ResourceRecordSet]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additions') }})
    deletions: Optional[List[ResourceRecordSet]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('deletions') }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('id') }})
    is_serving: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('isServing') }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('kind') }})
    start_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startTime') }})
    status: Optional[ChangeStatusEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('status') }})
    
