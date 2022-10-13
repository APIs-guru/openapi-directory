from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import orgmembership


@dataclass_json
@dataclass
class ListOrgMembershipsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    org_memberships: Optional[List[orgmembership.OrgMembership]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'orgMemberships' }})
    
