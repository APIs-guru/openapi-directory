from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AddRolesRequest:
    r"""AddRolesRequest
    Request for AddRoles to allow Service Producers to add roles in the shared VPC host project for them to use.
    """
    
    consumer_network: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('consumerNetwork') }})
    policy_binding: Optional[List[PolicyBinding]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyBinding') }})
    
