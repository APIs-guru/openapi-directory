from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlechromepolicyv1deletegrouppolicyrequest


@dataclass_json
@dataclass
class GoogleChromePolicyV1BatchDeleteGroupPoliciesRequest:
    requests: Optional[List[googlechromepolicyv1deletegrouppolicyrequest.GoogleChromePolicyV1DeleteGroupPolicyRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requests' }})
    
