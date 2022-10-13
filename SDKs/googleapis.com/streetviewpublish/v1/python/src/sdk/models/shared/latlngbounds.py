from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import latlng
from . import latlng


@dataclass_json
@dataclass
class LatLngBounds:
    northeast: Optional[latlng.LatLng] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'northeast' }})
    southwest: Optional[latlng.LatLng] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'southwest' }})
    
