from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json

class RoutingCurbsideStrictnessEnum(str, Enum):
    IGNORE = "ignore"
    SOFT = "soft"
    STRICT = "strict"

class RoutingNetworkDataProviderEnum(str, Enum):
    OPENSTREETMAP = "openstreetmap"
    TOMTOM = "tomtom"

class RoutingSnapPreventionsEnum(str, Enum):
    MOTORWAY = "motorway"
    TRUNK = "trunk"
    BRIDGE = "bridge"
    FORD = "ford"
    TUNNEL = "tunnel"
    FERRY = "ferry"


@dataclass_json
@dataclass
class Routing:
    calc_points: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'calc_points' }})
    consider_traffic: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'consider_traffic' }})
    curbside_strictness: Optional[RoutingCurbsideStrictnessEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'curbside_strictness' }})
    fail_fast: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'fail_fast' }})
    network_data_provider: Optional[RoutingNetworkDataProviderEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'network_data_provider' }})
    return_snapped_waypoints: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'return_snapped_waypoints' }})
    snap_preventions: Optional[List[RoutingSnapPreventionsEnum]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snap_preventions' }})
    
