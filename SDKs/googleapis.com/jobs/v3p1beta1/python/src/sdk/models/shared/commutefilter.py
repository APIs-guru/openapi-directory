from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class CommuteFilterCommuteMethodEnum(str, Enum):
    COMMUTE_METHOD_UNSPECIFIED = "COMMUTE_METHOD_UNSPECIFIED"
    DRIVING = "DRIVING"
    TRANSIT = "TRANSIT"
    WALKING = "WALKING"
    CYCLING = "CYCLING"

class CommuteFilterRoadTrafficEnum(str, Enum):
    ROAD_TRAFFIC_UNSPECIFIED = "ROAD_TRAFFIC_UNSPECIFIED"
    TRAFFIC_FREE = "TRAFFIC_FREE"
    BUSY_HOUR = "BUSY_HOUR"


@dataclass_json
@dataclass
class CommuteFilter:
    r"""CommuteFilter
    Input only. Parameters needed for commute search.
    """
    
    allow_imprecise_addresses: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('allowImpreciseAddresses') }})
    commute_method: Optional[CommuteFilterCommuteMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('commuteMethod') }})
    departure_time: Optional[TimeOfDay] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('departureTime') }})
    road_traffic: Optional[CommuteFilterRoadTrafficEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('roadTraffic') }})
    start_coordinates: Optional[LatLng] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('startCoordinates') }})
    travel_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('travelDuration') }})
    
