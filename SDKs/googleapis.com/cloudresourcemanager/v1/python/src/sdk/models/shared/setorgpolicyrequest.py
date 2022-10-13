from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import orgpolicy


@dataclass_json
@dataclass
class SetOrgPolicyRequest:
    policy: Optional[orgpolicy.OrgPolicy] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policy' }})
    
