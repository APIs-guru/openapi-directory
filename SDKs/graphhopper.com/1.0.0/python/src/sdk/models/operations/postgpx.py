from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PostGpxQueryParams:
    gps_accuracy: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'gps_accuracy', 'style': 'form', 'explode': True }})
    vehicle: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'vehicle', 'style': 'form', 'explode': True }})
    

@dataclass
class PostGpxRequest:
    query_params: PostGpxQueryParams = field()
    

@dataclass
class PostGpxResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    gh_error: Optional[shared.GhError] = field(default=None)
    route_response: Optional[shared.RouteResponse] = field(default=None)
    
