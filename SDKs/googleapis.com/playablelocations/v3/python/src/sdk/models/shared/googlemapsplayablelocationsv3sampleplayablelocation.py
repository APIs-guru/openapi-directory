from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import googletypelatlng
from . import googletypelatlng


@dataclass_json
@dataclass
class GoogleMapsPlayablelocationsV3SamplePlayableLocation:
    center_point: Optional[googletypelatlng.GoogleTypeLatLng] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'centerPoint' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    place_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'placeId' }})
    plus_code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'plusCode' }})
    snapped_point: Optional[googletypelatlng.GoogleTypeLatLng] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snappedPoint' }})
    types: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'types' }})
    
