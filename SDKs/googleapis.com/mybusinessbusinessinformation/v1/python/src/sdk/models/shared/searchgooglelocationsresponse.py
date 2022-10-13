from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlelocation


@dataclass_json
@dataclass
class SearchGoogleLocationsResponse:
    google_locations: Optional[List[googlelocation.GoogleLocation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'googleLocations' }})
    
