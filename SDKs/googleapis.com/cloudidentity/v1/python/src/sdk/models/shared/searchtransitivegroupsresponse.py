from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import grouprelation


@dataclass_json
@dataclass
class SearchTransitiveGroupsResponse:
    memberships: Optional[List[grouprelation.GroupRelation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'memberships' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
