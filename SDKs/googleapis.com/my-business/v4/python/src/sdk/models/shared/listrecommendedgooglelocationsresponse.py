from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlelocation


@dataclass_json
@dataclass
class ListRecommendedGoogleLocationsResponse:
    google_locations: Optional[List[googlelocation.GoogleLocation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'googleLocations' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    total_size: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'totalSize' }})
    
