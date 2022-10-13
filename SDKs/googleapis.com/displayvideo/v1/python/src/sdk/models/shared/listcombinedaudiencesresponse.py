from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import combinedaudience


@dataclass_json
@dataclass
class ListCombinedAudiencesResponse:
    combined_audiences: Optional[List[combinedaudience.CombinedAudience]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'combinedAudiences' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
