from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostForecastHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostForecastRequests:
    planning_level_request: Optional[shared.PlanningLevelRequest] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    planning_level_request1: Optional[shared.PlanningLevelRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    planning_level_request2: Optional[shared.PlanningLevelRequest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostForecastRequest:
    headers: PostForecastHeaders = field(default=None)
    request: Optional[PostForecastRequests] = field(default=None)
    

@dataclass
class PostForecastResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    forecast_response: Optional[shared.ForecastResponse] = field(default=None)
    status_code: int = field(default=None)
    
