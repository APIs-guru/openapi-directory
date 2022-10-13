from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import returnpolicyonline


@dataclass_json
@dataclass
class ListReturnPolicyOnlineResponse:
    return_policies: Optional[List[returnpolicyonline.ReturnPolicyOnline]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'returnPolicies' }})
    
