from dataclasses import dataclass, field
from typing import Enum,List,Optional
from sdk.models import shared

class GetMatrixCurbsideEnum(str, Enum):
    ANY = "any"
    RIGHT = "right"
    LEFT = "left"

class GetMatrixFromCurbsideEnum(str, Enum):
    ANY = "any"
    RIGHT = "right"
    LEFT = "left"

class GetMatrixToCurbsideEnum(str, Enum):
    ANY = "any"
    RIGHT = "right"
    LEFT = "left"


@dataclass
class GetMatrixQueryParams:
    curbside: Optional[List[GetMatrixCurbsideEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'curbside', 'style': 'form', 'explode': True }})
    fail_fast: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'fail_fast', 'style': 'form', 'explode': True }})
    from_curbside: Optional[List[GetMatrixFromCurbsideEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'from_curbside', 'style': 'form', 'explode': True }})
    from_point: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'from_point', 'style': 'form', 'explode': True }})
    from_point_hint: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'from_point_hint', 'style': 'form', 'explode': True }})
    out_array: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'out_array', 'style': 'form', 'explode': True }})
    point: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'point', 'style': 'form', 'explode': True }})
    point_hint: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'point_hint', 'style': 'form', 'explode': True }})
    snap_prevention: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'snap_prevention', 'style': 'form', 'explode': True }})
    to_curbside: Optional[List[GetMatrixToCurbsideEnum]] = field(default=None, metadata={'query_param': { 'field_name': 'to_curbside', 'style': 'form', 'explode': True }})
    to_point: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'to_point', 'style': 'form', 'explode': True }})
    to_point_hint: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'to_point_hint', 'style': 'form', 'explode': True }})
    turn_costs: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'turn_costs', 'style': 'form', 'explode': True }})
    vehicle: Optional[shared.VehicleProfileIDEnum] = field(default=None, metadata={'query_param': { 'field_name': 'vehicle', 'style': 'form', 'explode': True }})
    

@dataclass
class GetMatrixRequest:
    query_params: GetMatrixQueryParams = field(default=None)
    

@dataclass
class GetMatrixResponse:
    content_type: str = field(default=None)
    gh_error: Optional[shared.GhError] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    matrix_response: Optional[shared.MatrixResponse] = field(default=None)
    status_code: int = field(default=None)
    
