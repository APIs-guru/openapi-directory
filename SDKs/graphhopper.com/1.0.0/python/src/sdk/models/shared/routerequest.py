from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *

class RouteRequestAlgorithmEnum(str, Enum):
    ROUND_TRIP = "round_trip"
    ALTERNATIVE_ROUTE = "alternative_route"

class RouteRequestCurbsidesEnum(str, Enum):
    ANY = "any"
    RIGHT = "right"
    LEFT = "left"


@dataclass_json
@dataclass
class RouteRequest:
    algorithm: Optional[RouteRequestAlgorithmEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('algorithm') }})
    alternative_route_max_paths: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternative_route.max_paths') }})
    alternative_route_max_share_factor: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternative_route.max_share_factor') }})
    alternative_route_max_weight_factor: Optional[float] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('alternative_route.max_weight_factor') }})
    avoid: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('avoid') }})
    block_area: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('block_area') }})
    calc_points: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('calc_points') }})
    ch_disable: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ch.disable') }})
    curbsides: Optional[List[RouteRequestCurbsidesEnum]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('curbsides') }})
    debug: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('debug') }})
    details: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('details') }})
    elevation: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('elevation') }})
    heading_penalty: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('heading_penalty') }})
    headings: Optional[List[int]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('headings') }})
    instructions: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('instructions') }})
    locale: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('locale') }})
    optimize: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('optimize') }})
    pass_through: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('pass_through') }})
    point_hints: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('point_hints') }})
    points: Optional[List[List[float]]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('points') }})
    points_encoded: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('points_encoded') }})
    round_trip_distance: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('round_trip.distance') }})
    round_trip_seed: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('round_trip.seed') }})
    snap_preventions: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('snap_preventions') }})
    vehicle: Optional[VehicleProfileIDEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('vehicle') }})
    weighting: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('weighting') }})
    
