from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import policybinding


@dataclass_json
@dataclass
class AddRolesRequest:
    consumer_network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consumerNetwork' }})
    policy_binding: Optional[List[policybinding.PolicyBinding]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policyBinding' }})
    
