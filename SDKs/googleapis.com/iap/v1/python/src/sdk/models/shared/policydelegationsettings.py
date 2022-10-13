from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import policyname
from . import resource


@dataclass_json
@dataclass
class PolicyDelegationSettings:
    iam_permission: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iamPermission' }})
    iam_service_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'iamServiceName' }})
    policy_name: Optional[policyname.PolicyName] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyName' }})
    resource: Optional[resource.Resource] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource' }})
    
