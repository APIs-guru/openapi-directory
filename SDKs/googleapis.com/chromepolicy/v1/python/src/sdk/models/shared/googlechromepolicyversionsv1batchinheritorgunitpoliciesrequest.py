from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleChromePolicyVersionsV1BatchInheritOrgUnitPoliciesRequest:
    r"""GoogleChromePolicyVersionsV1BatchInheritOrgUnitPoliciesRequest
    Request message for specifying that multiple policy values inherit their value from their parents.
    """
    
    requests: Optional[List[GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequest]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requests') }})
    
