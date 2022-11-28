from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleChromePolicyVersionsV1BatchModifyGroupPoliciesRequest:
    r"""GoogleChromePolicyVersionsV1BatchModifyGroupPoliciesRequest
    Request message for modifying multiple policy values for a specific group-based target.
    """
    
    requests: Optional[List[GoogleChromePolicyVersionsV1ModifyGroupPolicyRequest]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requests') }})
    
