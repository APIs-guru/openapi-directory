from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleChromePolicyVersionsV1ListGroupPriorityOrderingResponse:
    r"""GoogleChromePolicyVersionsV1ListGroupPriorityOrderingResponse
    Response message for listing the group priority ordering of an app.
    """
    
    group_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('groupIds') }})
    policy_namespace: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyNamespace') }})
    policy_target_key: Optional[GoogleChromePolicyVersionsV1PolicyTargetKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policyTargetKey') }})
    
