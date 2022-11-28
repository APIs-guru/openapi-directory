from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleChromePolicyVersionsV1ResolveResponse:
    r"""GoogleChromePolicyVersionsV1ResolveResponse
    Response message for getting the resolved policy value for a specific target.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    resolved_policies: Optional[List[GoogleChromePolicyVersionsV1ResolvedPolicy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('resolvedPolicies') }})
    
