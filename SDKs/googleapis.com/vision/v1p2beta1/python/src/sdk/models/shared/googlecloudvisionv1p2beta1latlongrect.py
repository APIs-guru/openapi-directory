from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import latlng
from . import latlng


@dataclass_json
@dataclass
class GoogleCloudVisionV1p2beta1LatLongRect:
    max_lat_lng: Optional[latlng.LatLng] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'maxLatLng' }})
    min_lat_lng: Optional[latlng.LatLng] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'minLatLng' }})
    
