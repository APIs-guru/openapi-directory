from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlechromepolicyversionsv1deletegrouppolicyrequest


@dataclass_json
@dataclass
class GoogleChromePolicyVersionsV1BatchDeleteGroupPoliciesRequest:
    requests: Optional[List[googlechromepolicyversionsv1deletegrouppolicyrequest.GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requests' }})
    
