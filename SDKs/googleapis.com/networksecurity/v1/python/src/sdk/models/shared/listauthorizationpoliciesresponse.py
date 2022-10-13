from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import authorizationpolicy


@dataclass_json
@dataclass
class ListAuthorizationPoliciesResponse:
    authorization_policies: Optional[List[authorizationpolicy.AuthorizationPolicy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorizationPolicies' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
