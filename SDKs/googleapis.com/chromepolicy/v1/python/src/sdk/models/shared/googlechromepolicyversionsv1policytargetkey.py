from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleChromePolicyVersionsV1PolicyTargetKey:
    r"""GoogleChromePolicyVersionsV1PolicyTargetKey
    The key used to identify the target on which the policy will be applied.
    """
    
    additional_target_keys: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('additionalTargetKeys') }})
    target_resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetResource') }})
    
