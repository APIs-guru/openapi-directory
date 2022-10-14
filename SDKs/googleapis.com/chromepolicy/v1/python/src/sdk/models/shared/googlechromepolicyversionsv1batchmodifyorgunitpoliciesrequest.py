from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlechromepolicyversionsv1modifyorgunitpolicyrequest


@dataclass_json
@dataclass
class GoogleChromePolicyVersionsV1BatchModifyOrgUnitPoliciesRequest:
    requests: Optional[List[googlechromepolicyversionsv1modifyorgunitpolicyrequest.GoogleChromePolicyVersionsV1ModifyOrgUnitPolicyRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requests' }})
    
