from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import policy
from . import status


@dataclass_json
@dataclass
class IamPolicy:
    policy: Optional[policy.Policy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policy' }})
    status: Optional[status.Status] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'status' }})
    
