from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListAvailableOrgPolicyConstraintsResponse:
    r"""ListAvailableOrgPolicyConstraintsResponse
    The response returned from the `ListAvailableOrgPolicyConstraints` method. Returns all `Constraints` that could be set at this level of the hierarchy (contrast with the response from `ListPolicies`, which returns all policies which are set).
    """
    
    constraints: Optional[List[Constraint]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('constraints') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
