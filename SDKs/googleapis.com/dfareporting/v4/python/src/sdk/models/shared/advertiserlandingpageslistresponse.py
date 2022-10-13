from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import landingpage


@dataclass_json
@dataclass
class AdvertiserLandingPagesListResponse:
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    landing_pages: Optional[List[landingpage.LandingPage]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'landingPages' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
