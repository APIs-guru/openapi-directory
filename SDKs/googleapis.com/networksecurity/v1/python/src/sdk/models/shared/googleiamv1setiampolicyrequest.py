from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import googleiamv1policy


@dataclass_json
@dataclass
class GoogleIamV1SetIamPolicyRequest:
    policy: Optional[googleiamv1policy.GoogleIamV1Policy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policy' }})
    update_mask: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updateMask' }})
    
