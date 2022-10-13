from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import latlng


@dataclass_json
@dataclass
class RegionCount:
    count: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'count' }})
    label: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'label' }})
    latlng: Optional[latlng.LatLng] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latlng' }})
    
