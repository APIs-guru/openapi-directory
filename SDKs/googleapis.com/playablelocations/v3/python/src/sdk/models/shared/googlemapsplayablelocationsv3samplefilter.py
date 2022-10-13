from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googlemapsplayablelocationsv3samplespacingoptions


@dataclass_json
@dataclass
class GoogleMapsPlayablelocationsV3SampleFilter:
    included_types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'includedTypes' }})
    max_location_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxLocationCount' }})
    spacing: Optional[googlemapsplayablelocationsv3samplespacingoptions.GoogleMapsPlayablelocationsV3SampleSpacingOptions] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'spacing' }})
    
