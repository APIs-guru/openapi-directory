from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import orgpolicy


@dataclass_json
@dataclass
class ListOrgPoliciesResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    policies: Optional[List[orgpolicy.OrgPolicy]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'policies' }})
    
