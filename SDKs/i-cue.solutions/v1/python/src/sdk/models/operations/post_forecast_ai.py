from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostForecastAiHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostForecastAiRequests:
    ai_planning_level_request: Optional[shared.AiPlanningLevelRequest] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    ai_planning_level_request1: Optional[shared.AiPlanningLevelRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    ai_planning_level_request2: Optional[shared.AiPlanningLevelRequest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostForecastAiRequest:
    headers: PostForecastAiHeaders = field()
    request: Optional[PostForecastAiRequests] = field(default=None)
    

@dataclass
class PostForecastAiResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    forecast_response: Optional[shared.ForecastResponse] = field(default=None)
    
