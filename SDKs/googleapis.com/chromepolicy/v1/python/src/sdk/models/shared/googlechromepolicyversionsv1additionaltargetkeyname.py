from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class GoogleChromePolicyVersionsV1AdditionalTargetKeyName:
    r"""GoogleChromePolicyVersionsV1AdditionalTargetKeyName
    Additional key names that will be used to identify the target of the policy value.
    """
    
    key: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('key') }})
    key_description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('keyDescription') }})
    
