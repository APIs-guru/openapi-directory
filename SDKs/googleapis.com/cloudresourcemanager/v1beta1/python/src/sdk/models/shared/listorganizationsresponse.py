from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import organization


@dataclass_json
@dataclass
class ListOrganizationsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    organizations: Optional[List[organization.Organization]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'organizations' }})
    
