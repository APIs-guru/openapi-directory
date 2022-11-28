from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostForecastForecastBottomUpHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostForecastForecastBottomUpRequests:
    planning_level_request: Optional[shared.PlanningLevelRequest] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    planning_level_request1: Optional[shared.PlanningLevelRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    planning_level_request2: Optional[shared.PlanningLevelRequest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostForecastForecastBottomUpRequest:
    headers: PostForecastForecastBottomUpHeaders = field()
    request: Optional[PostForecastForecastBottomUpRequests] = field(default=None)
    

@dataclass
class PostForecastForecastBottomUpResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    forecast_bottom_up_response: Optional[shared.ForecastBottomUpResponse] = field(default=None)
    
