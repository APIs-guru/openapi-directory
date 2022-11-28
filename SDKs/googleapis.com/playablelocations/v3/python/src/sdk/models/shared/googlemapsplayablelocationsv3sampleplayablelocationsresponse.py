from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GoogleMapsPlayablelocationsV3SamplePlayableLocationsResponse:
    r"""GoogleMapsPlayablelocationsV3SamplePlayableLocationsResponse
     Response for the SamplePlayableLocations method.
    """
    
    locations_per_game_object_type: Optional[dict[str, GoogleMapsPlayablelocationsV3SamplePlayableLocationList]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locationsPerGameObjectType') }})
    ttl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ttl') }})
    
