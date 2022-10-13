from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleIamV1GetPolicyOptions:
    requested_policy_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requestedPolicyVersion' }})
    
