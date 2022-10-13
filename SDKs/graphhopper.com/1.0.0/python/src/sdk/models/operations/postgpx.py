from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PostGpxQueryParams:
    gps_accuracy: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'gps_accuracy', 'style': 'form', 'explode': True }})
    vehicle: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'vehicle', 'style': 'form', 'explode': True }})
    

@dataclass
class PostGpxRequest:
    query_params: PostGpxQueryParams = field(default=None)
    

@dataclass
class PostGpxResponse:
    content_type: str = field(default=None)
    gh_error: Optional[shared.GhError] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    route_response: Optional[shared.RouteResponse] = field(default=None)
    status_code: int = field(default=None)
    
