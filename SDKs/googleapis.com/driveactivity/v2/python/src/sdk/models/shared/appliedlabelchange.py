from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import appliedlabelchangedetail


@dataclass_json
@dataclass
class AppliedLabelChange:
    changes: Optional[List[appliedlabelchangedetail.AppliedLabelChangeDetail]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'changes' }})
    
