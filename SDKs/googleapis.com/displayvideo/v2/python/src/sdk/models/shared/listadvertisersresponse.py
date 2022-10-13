from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import advertiser


@dataclass_json
@dataclass
class ListAdvertisersResponse:
    advertisers: Optional[List[advertiser.Advertiser]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'advertisers' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
