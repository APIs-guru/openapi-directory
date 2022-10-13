from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlechromepolicyv1modifyorgunitpolicyrequest


@dataclass_json
@dataclass
class GoogleChromePolicyV1BatchModifyOrgUnitPoliciesRequest:
    requests: Optional[List[googlechromepolicyv1modifyorgunitpolicyrequest.GoogleChromePolicyV1ModifyOrgUnitPolicyRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requests' }})
    
