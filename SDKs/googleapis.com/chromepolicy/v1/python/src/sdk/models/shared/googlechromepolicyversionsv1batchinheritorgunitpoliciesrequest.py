from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlechromepolicyversionsv1inheritorgunitpolicyrequest


@dataclass_json
@dataclass
class GoogleChromePolicyVersionsV1BatchInheritOrgUnitPoliciesRequest:
    requests: Optional[List[googlechromepolicyversionsv1inheritorgunitpolicyrequest.GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requests' }})
    
