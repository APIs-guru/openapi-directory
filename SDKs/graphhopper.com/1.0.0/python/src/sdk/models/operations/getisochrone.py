from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared

class GetIsochroneWeightingEnum(str, Enum):
    FASTEST = "fastest"
    SHORTEST = "shortest"


@dataclass
class GetIsochroneQueryParams:
    buckets: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'buckets', 'style': 'form', 'explode': True }})
    distance_limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'distance_limit', 'style': 'form', 'explode': True }})
    point: str = field(default=None, metadata={'query_param': { 'field_name': 'point', 'style': 'form', 'explode': True }})
    reverse_flow: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'reverse_flow', 'style': 'form', 'explode': True }})
    time_limit: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'time_limit', 'style': 'form', 'explode': True }})
    vehicle: Optional[shared.VehicleProfileIDEnum] = field(default=None, metadata={'query_param': { 'field_name': 'vehicle', 'style': 'form', 'explode': True }})
    weighting: Optional[GetIsochroneWeightingEnum] = field(default=None, metadata={'query_param': { 'field_name': 'weighting', 'style': 'form', 'explode': True }})
    

@dataclass
class GetIsochroneRequest:
    query_params: GetIsochroneQueryParams = field(default=None)
    

@dataclass
class GetIsochroneResponse:
    content_type: str = field(default=None)
    gh_error: Optional[shared.GhError] = field(default=None)
    isochrone_response: Optional[shared.IsochroneResponse] = field(default=None)
    status_code: int = field(default=None)
    
