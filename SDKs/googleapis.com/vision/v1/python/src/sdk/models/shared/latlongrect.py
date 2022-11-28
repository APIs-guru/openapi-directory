from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class LatLongRect:
    r"""LatLongRect
    Rectangle determined by min and max `LatLng` pairs.
    """
    
    max_lat_lng: Optional[LatLng] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('maxLatLng') }})
    min_lat_lng: Optional[LatLng] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('minLatLng') }})
    
