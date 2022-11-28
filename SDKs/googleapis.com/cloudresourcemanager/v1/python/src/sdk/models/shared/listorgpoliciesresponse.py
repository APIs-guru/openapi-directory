from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListOrgPoliciesResponse:
    r"""ListOrgPoliciesResponse
    The response returned from the `ListOrgPolicies` method. It will be empty if no `Policies` are set on the resource.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    policies: Optional[List[OrgPolicy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policies') }})
    
