from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class TargetsPresentCondition:
    missing_targets: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'missingTargets' }})
    status: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    update_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateTime' }})
    
