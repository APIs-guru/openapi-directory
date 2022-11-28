from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class TenantProjectPolicy:
    r"""TenantProjectPolicy
    Describes policy settings that can be applied to a newly created tenant project.
    """
    
    policy_bindings: Optional[List[PolicyBinding]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyBindings') }})
    
