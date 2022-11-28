from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleIamV1GetPolicyOptions:
    r"""GoogleIamV1GetPolicyOptions
    Encapsulates settings provided to GetIamPolicy.
    """
    
    requested_policy_version: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('requestedPolicyVersion') }})
    
