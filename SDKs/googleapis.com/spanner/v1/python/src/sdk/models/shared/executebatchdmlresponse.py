from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import resultset
from . import status


@dataclass_json
@dataclass
class ExecuteBatchDmlResponse:
    result_sets: Optional[List[resultset.ResultSet]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resultSets' }})
    status: Optional[status.Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
