from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlemapsplayablelocationsv3sampleplayablelocationlist


@dataclass_json
@dataclass
class GoogleMapsPlayablelocationsV3SamplePlayableLocationsResponse:
    locations_per_game_object_type: Optional[dict[str, googlemapsplayablelocationsv3sampleplayablelocationlist.GoogleMapsPlayablelocationsV3SamplePlayableLocationList]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locationsPerGameObjectType' }})
    ttl: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ttl' }})
    
