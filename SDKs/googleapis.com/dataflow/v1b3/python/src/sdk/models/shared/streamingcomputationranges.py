from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class StreamingComputationRanges:
    r"""StreamingComputationRanges
    Describes full or partial data disk assignment information of the computation ranges.
    """
    
    computation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('computationId') }})
    range_assignments: Optional[List[KeyRangeDataDiskAssignment]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('rangeAssignments') }})
    
