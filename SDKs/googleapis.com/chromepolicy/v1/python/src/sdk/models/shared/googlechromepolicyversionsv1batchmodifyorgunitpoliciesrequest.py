from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleChromePolicyVersionsV1BatchModifyOrgUnitPoliciesRequest:
    r"""GoogleChromePolicyVersionsV1BatchModifyOrgUnitPoliciesRequest
    Request message for modifying multiple policy values for a specific target.
    """
    
    requests: Optional[List[GoogleChromePolicyVersionsV1ModifyOrgUnitPolicyRequest]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requests') }})
    
