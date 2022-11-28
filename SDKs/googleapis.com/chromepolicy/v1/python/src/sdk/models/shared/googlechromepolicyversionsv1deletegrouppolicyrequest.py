from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest:
    r"""GoogleChromePolicyVersionsV1DeleteGroupPolicyRequest
    Request parameters for deleting the policy value of a specific group target.
    """
    
    policy_schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policySchema') }})
    policy_target_key: Optional[GoogleChromePolicyVersionsV1PolicyTargetKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyTargetKey') }})
    
