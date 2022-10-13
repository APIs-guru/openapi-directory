from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlemapsplayablelocationsv3sampleareafilter
from . import googlemapsplayablelocationsv3samplecriterion


@dataclass_json
@dataclass
class GoogleMapsPlayablelocationsV3SamplePlayableLocationsRequest:
    area_filter: Optional[googlemapsplayablelocationsv3sampleareafilter.GoogleMapsPlayablelocationsV3SampleAreaFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'areaFilter' }})
    criteria: Optional[List[googlemapsplayablelocationsv3samplecriterion.GoogleMapsPlayablelocationsV3SampleCriterion]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'criteria' }})
    
