from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class FindMatchingLocationsResponse:
    r"""FindMatchingLocationsResponse
    Response message for Locations.FindMatchingLocations.
    """
    
    match_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchTime') }})
    matched_locations: Optional[List[MatchedLocation]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('matchedLocations') }})
    
