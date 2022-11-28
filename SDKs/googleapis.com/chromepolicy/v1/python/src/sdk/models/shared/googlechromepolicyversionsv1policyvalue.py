from dataclasses import dataclass, field
from typing import Any,Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleChromePolicyVersionsV1PolicyValue:
    r"""GoogleChromePolicyVersionsV1PolicyValue
    A particular value for a policy managed by the service.
    """
    
    policy_schema: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policySchema') }})
    value: Optional[dict[str, Any]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
