from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleCloudOrgpolicyV2ListPoliciesResponse:
    r"""GoogleCloudOrgpolicyV2ListPoliciesResponse
    The response returned from the ListPolicies method. It will be empty if no `Policies` are set on the resource.
    """
    
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    policies: Optional[List[GoogleCloudOrgpolicyV2Policy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('policies') }})
    
