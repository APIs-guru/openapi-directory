from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlemapsplayablelocationsv3sampleplayablelocation


@dataclass_json
@dataclass
class GoogleMapsPlayablelocationsV3SamplePlayableLocationList:
    locations: Optional[List[googlemapsplayablelocationsv3sampleplayablelocation.GoogleMapsPlayablelocationsV3SamplePlayableLocation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'locations' }})
    
