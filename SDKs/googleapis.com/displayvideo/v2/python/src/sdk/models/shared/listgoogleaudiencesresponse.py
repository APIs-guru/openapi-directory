from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googleaudience


@dataclass_json
@dataclass
class ListGoogleAudiencesResponse:
    google_audiences: Optional[List[googleaudience.GoogleAudience]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'googleAudiences' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
