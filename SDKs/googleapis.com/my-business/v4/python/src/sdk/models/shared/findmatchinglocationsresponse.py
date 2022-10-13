from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import matchedlocation


@dataclass_json
@dataclass
class FindMatchingLocationsResponse:
    match_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchTime' }})
    matched_locations: Optional[List[matchedlocation.MatchedLocation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'matchedLocations' }})
    
