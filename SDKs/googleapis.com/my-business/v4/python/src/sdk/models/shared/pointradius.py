from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class PointRadius:
    r"""PointRadius
    A radius around a particular point (latitude/longitude).
    """
    
    latlng: Optional[LatLng] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('latlng') }})
    radius_km: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('radiusKm') }})
    
