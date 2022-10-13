from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import latlng


@dataclass_json
@dataclass
class GoogleCloudVisionV1p1beta1LocationInfo:
    lat_lng: Optional[latlng.LatLng] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latLng' }})
    
