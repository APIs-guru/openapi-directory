from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import iampolicy


@dataclass_json
@dataclass
class SetIamPolicyRequest:
    policy: Optional[iampolicy.IamPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policy' }})
    
