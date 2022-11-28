from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class SnappedWaypoint:
    r"""SnappedWaypoint
    Access point to the (road)network. It is only available if `return_snapped_waypoints` is true (be default it is false).
    """
    
    lat: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lat') }})
    lon: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('lon') }})
    
