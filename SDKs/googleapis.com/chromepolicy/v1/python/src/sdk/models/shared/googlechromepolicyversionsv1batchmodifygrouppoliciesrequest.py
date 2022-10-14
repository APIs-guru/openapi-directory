from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlechromepolicyversionsv1modifygrouppolicyrequest


@dataclass_json
@dataclass
class GoogleChromePolicyVersionsV1BatchModifyGroupPoliciesRequest:
    requests: Optional[List[googlechromepolicyversionsv1modifygrouppolicyrequest.GoogleChromePolicyVersionsV1ModifyGroupPolicyRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requests' }})
    
