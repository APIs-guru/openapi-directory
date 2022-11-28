from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostForecastOptimalParameterHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostForecastOptimalParameterRequests:
    planning_level_request: Optional[shared.PlanningLevelRequest] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    planning_level_request1: Optional[shared.PlanningLevelRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    planning_level_request2: Optional[shared.PlanningLevelRequest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostForecastOptimalParameterRequest:
    headers: PostForecastOptimalParameterHeaders = field()
    request: Optional[PostForecastOptimalParameterRequests] = field(default=None)
    

@dataclass
class PostForecastOptimalParameterResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    optimal_parameter_response: Optional[shared.OptimalParameterResponse] = field(default=None)
    
