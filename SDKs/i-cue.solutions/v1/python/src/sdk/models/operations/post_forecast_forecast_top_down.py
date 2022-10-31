from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostForecastForecastTopDownHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostForecastForecastTopDownRequests:
    planning_level_request: Optional[shared.PlanningLevelRequest] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    planning_level_request1: Optional[shared.PlanningLevelRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    planning_level_request2: Optional[shared.PlanningLevelRequest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostForecastForecastTopDownRequest:
    headers: PostForecastForecastTopDownHeaders = field(default=None)
    request: Optional[PostForecastForecastTopDownRequests] = field(default=None)
    

@dataclass
class PostForecastForecastTopDownResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
