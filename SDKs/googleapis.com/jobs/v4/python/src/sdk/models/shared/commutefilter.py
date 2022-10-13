from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import timeofday
from . import latlng

class CommuteFilterCommuteMethodEnum(str, Enum):
    COMMUTE_METHOD_UNSPECIFIED = "COMMUTE_METHOD_UNSPECIFIED"
    DRIVING = "DRIVING"
    TRANSIT = "TRANSIT"
    WALKING = "WALKING"
    CYCLING = "CYCLING"
    TRANSIT_ACCESSIBLE = "TRANSIT_ACCESSIBLE"

class CommuteFilterRoadTrafficEnum(str, Enum):
    ROAD_TRAFFIC_UNSPECIFIED = "ROAD_TRAFFIC_UNSPECIFIED"
    TRAFFIC_FREE = "TRAFFIC_FREE"
    BUSY_HOUR = "BUSY_HOUR"


@dataclass_json
@dataclass
class CommuteFilter:
    allow_imprecise_addresses: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'allowImpreciseAddresses' }})
    commute_method: Optional[CommuteFilterCommuteMethodEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'commuteMethod' }})
    departure_time: Optional[timeofday.TimeOfDay] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'departureTime' }})
    road_traffic: Optional[CommuteFilterRoadTrafficEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'roadTraffic' }})
    start_coordinates: Optional[latlng.LatLng] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'startCoordinates' }})
    travel_duration: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'travelDuration' }})
    
