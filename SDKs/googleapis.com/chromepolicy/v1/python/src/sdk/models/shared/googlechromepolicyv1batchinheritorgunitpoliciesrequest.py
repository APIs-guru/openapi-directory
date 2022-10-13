from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlechromepolicyv1inheritorgunitpolicyrequest


@dataclass_json
@dataclass
class GoogleChromePolicyV1BatchInheritOrgUnitPoliciesRequest:
    requests: Optional[List[googlechromepolicyv1inheritorgunitpolicyrequest.GoogleChromePolicyV1InheritOrgUnitPolicyRequest]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'requests' }})
    
