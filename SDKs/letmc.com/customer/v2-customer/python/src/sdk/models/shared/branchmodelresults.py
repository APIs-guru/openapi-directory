from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import branchmodel


@dataclass_json
@dataclass
class BranchModelResults:
    count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Count' }})
    data: Optional[List[branchmodel.BranchModel]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Data' }})
    
