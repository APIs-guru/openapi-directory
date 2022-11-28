from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ResponseAddress:
    r"""ResponseAddress
    Address of activity
    """
    
    lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    location_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('location_id') }})
    lon: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lon') }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('name') }})
    snapped_waypoint: Optional[SnappedWaypoint] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snapped_waypoint') }})
    street_hint: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('street_hint') }})
    
