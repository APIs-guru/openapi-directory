from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ApplyParametersRequest:
    apply_all: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'applyAll' }})
    node_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nodeIds' }})
    
