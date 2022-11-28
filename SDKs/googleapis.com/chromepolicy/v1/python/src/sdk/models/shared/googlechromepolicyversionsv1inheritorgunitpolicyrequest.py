from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequest:
    r"""GoogleChromePolicyVersionsV1InheritOrgUnitPolicyRequest
    Request parameters for inheriting policy value of a specific org unit target from the policy value of its parent org unit.
    """
    
    policy_schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policySchema') }})
    policy_target_key: Optional[GoogleChromePolicyVersionsV1PolicyTargetKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyTargetKey') }})
    
