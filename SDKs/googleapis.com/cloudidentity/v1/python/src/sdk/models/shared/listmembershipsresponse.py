from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import membership


@dataclass_json
@dataclass
class ListMembershipsResponse:
    memberships: Optional[List[membership.Membership]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memberships' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
