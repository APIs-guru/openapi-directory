from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlechromepolicyv1modifygrouppolicyrequest


@dataclass_json
@dataclass
class GoogleChromePolicyV1BatchModifyGroupPoliciesRequest:
    requests: Optional[List[googlechromepolicyv1modifygrouppolicyrequest.GoogleChromePolicyV1ModifyGroupPolicyRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requests' }})
    
