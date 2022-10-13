from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PostRouteRequest:
    request: Optional[shared.RouteRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostRouteResponse:
    content_type: str = field(default=None)
    gh_error: Optional[shared.GhError] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    route_response: Optional[shared.RouteResponse] = field(default=None)
    status_code: int = field(default=None)
    
