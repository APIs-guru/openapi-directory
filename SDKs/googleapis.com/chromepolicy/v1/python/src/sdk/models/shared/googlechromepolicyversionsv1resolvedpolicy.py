from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleChromePolicyVersionsV1ResolvedPolicy:
    r"""GoogleChromePolicyVersionsV1ResolvedPolicy
    The resolved value of a policy for a given target.
    """
    
    added_source_key: Optional[GoogleChromePolicyVersionsV1PolicyTargetKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('addedSourceKey') }})
    source_key: Optional[GoogleChromePolicyVersionsV1PolicyTargetKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('sourceKey') }})
    target_key: Optional[GoogleChromePolicyVersionsV1PolicyTargetKey] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('targetKey') }})
    value: Optional[GoogleChromePolicyVersionsV1PolicyValue] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('value') }})
    
