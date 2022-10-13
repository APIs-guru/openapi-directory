from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import advertisergroup


@dataclass_json
@dataclass
class AdvertiserGroupsListResponse:
    advertiser_groups: Optional[List[advertisergroup.AdvertiserGroup]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertiserGroups' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
