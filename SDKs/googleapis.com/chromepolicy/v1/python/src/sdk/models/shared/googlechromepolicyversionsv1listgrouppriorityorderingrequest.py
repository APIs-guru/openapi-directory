from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleChromePolicyVersionsV1ListGroupPriorityOrderingRequest:
    r"""GoogleChromePolicyVersionsV1ListGroupPriorityOrderingRequest
    Request message for listing the group priority ordering of an app.
    """
    
    policy_namespace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyNamespace') }})
    policy_target_key: Optional[GoogleChromePolicyVersionsV1PolicyTargetKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyTargetKey') }})
    
