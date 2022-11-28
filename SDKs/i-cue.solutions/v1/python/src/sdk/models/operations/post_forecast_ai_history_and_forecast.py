from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostForecastAiHistoryAndForecastHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostForecastAiHistoryAndForecastRequests:
    ai_planning_level_request: Optional[shared.AiPlanningLevelRequest] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    ai_planning_level_request1: Optional[shared.AiPlanningLevelRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    ai_planning_level_request2: Optional[shared.AiPlanningLevelRequest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostForecastAiHistoryAndForecastRequest:
    headers: PostForecastAiHistoryAndForecastHeaders = field()
    request: Optional[PostForecastAiHistoryAndForecastRequests] = field(default=None)
    

@dataclass
class PostForecastAiHistoryAndForecastResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    history_and_forecast_response: Optional[shared.HistoryAndForecastResponse] = field(default=None)
    
