from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListAuthorizationPoliciesResponse:
    r"""ListAuthorizationPoliciesResponse
    Response returned by the ListAuthorizationPolicies method.
    """
    
    authorization_policies: Optional[List[AuthorizationPolicy]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('authorizationPolicies') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
