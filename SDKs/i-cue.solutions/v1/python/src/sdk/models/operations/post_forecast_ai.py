from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostForecastAiHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token' }})
    

@dataclass
class PostForecastAiRequests:
    ai_planning_level_request: Optional[shared.AiPlanningLevelRequest] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    ai_planning_level_request1: Optional[shared.AiPlanningLevelRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    ai_planning_level_request2: Optional[shared.AiPlanningLevelRequest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostForecastAiRequest:
    headers: PostForecastAiHeaders = field(default=None)
    request: Optional[PostForecastAiRequests] = field(default=None)
    

@dataclass
class PostForecastAiResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    forecast_response: Optional[shared.ForecastResponse] = field(default=None)
    status_code: int = field(default=None)
    
