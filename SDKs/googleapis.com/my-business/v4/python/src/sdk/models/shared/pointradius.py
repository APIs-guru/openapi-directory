from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import latlng


@dataclass_json
@dataclass
class PointRadius:
    latlng: Optional[latlng.LatLng] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latlng' }})
    radius_km: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'radiusKm' }})
    
