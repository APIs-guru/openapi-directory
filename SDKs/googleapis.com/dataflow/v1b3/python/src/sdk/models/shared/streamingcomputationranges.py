from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import keyrangedatadiskassignment


@dataclass_json
@dataclass
class StreamingComputationRanges:
    computation_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'computationId' }})
    range_assignments: Optional[List[keyrangedatadiskassignment.KeyRangeDataDiskAssignment]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'rangeAssignments' }})
    
