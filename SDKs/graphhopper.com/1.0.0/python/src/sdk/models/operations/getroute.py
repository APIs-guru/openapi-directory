from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class GetRouteAlgorithmEnum(str, Enum):
    ROUND_TRIP = "round_trip"
    ALTERNATIVE_ROUTE = "alternative_route"

class GetRouteCurbsideEnum(str, Enum):
    ANY = "any"
    RIGHT = "right"
    LEFT = "left"


@dataclass
class GetRouteQueryParams:
    algorithm: Optional[GetRouteAlgorithmEnum] = field(default=None, metadata={'query_param': { 'field_name': 'algorithm', 'style': 'form', 'explode': True }})
    alternative_route_max_paths: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'alternative_route.max_paths', 'style': 'form', 'explode': True }})
    alternative_route_max_share_factor: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'alternative_route.max_share_factor', 'style': 'form', 'explode': True }})
    alternative_route_max_weight_factor: Optional[float] = field(default=None, metadata={'query_param': { 'field_name': 'alternative_route.max_weight_factor', 'style': 'form', 'explode': True }})
    avoid: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'avoid', 'style': 'form', 'explode': True }})
    block_area: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'block_area', 'style': 'form', 'explode': True }})
    calc_points: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'calc_points', 'style': 'form', 'explode': True }})
    ch_disable: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'ch.disable', 'style': 'form', 'explode': True }})
    curbside: Optional[List[GetRouteCurbsideEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'curbside', 'style': 'form', 'explode': True }})
    debug: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'debug', 'style': 'form', 'explode': True }})
    details: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'details', 'style': 'form', 'explode': True }})
    elevation: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'elevation', 'style': 'form', 'explode': True }})
    heading: Optional[List[int]] = field(default=None, metadata={'query_param': { 'field_name': 'heading', 'style': 'form', 'explode': True }})
    heading_penalty: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'heading_penalty', 'style': 'form', 'explode': True }})
    instructions: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'instructions', 'style': 'form', 'explode': True }})
    locale: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'locale', 'style': 'form', 'explode': True }})
    optimize: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'optimize', 'style': 'form', 'explode': True }})
    pass_through: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'pass_through', 'style': 'form', 'explode': True }})
    point: List[str] = field(default=None, metadata={'query_param': { 'field_name': 'point', 'style': 'form', 'explode': True }})
    point_hint: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'point_hint', 'style': 'form', 'explode': True }})
    points_encoded: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'points_encoded', 'style': 'form', 'explode': True }})
    round_trip_distance: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'round_trip.distance', 'style': 'form', 'explode': True }})
    round_trip_seed: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'round_trip.seed', 'style': 'form', 'explode': True }})
    snap_prevention: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'snap_prevention', 'style': 'form', 'explode': True }})
    turn_costs: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'turn_costs', 'style': 'form', 'explode': True }})
    vehicle: Optional[shared.VehicleProfileIDEnum] = field(default=None, metadata={'query_param': { 'field_name': 'vehicle', 'style': 'form', 'explode': True }})
    weighting: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'weighting', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRouteRequest:
    query_params: GetRouteQueryParams = field(default=None)
    

@dataclass
class GetRouteResponse:
    content_type: str = field(default=None)
    gh_error: Optional[shared.GhError] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    route_response: Optional[shared.RouteResponse] = field(default=None)
    status_code: int = field(default=None)
    
