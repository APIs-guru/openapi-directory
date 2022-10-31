from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostForecastHistoryAndForecastHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostForecastHistoryAndForecastRequests:
    planning_level_request: Optional[shared.PlanningLevelRequest] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    planning_level_request1: Optional[shared.PlanningLevelRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    planning_level_request2: Optional[shared.PlanningLevelRequest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostForecastHistoryAndForecastRequest:
    headers: PostForecastHistoryAndForecastHeaders = field(default=None)
    request: Optional[PostForecastHistoryAndForecastRequests] = field(default=None)
    

@dataclass
class PostForecastHistoryAndForecastResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    history_and_forecast_response: Optional[shared.HistoryAndForecastResponse] = field(default=None)
    status_code: int = field(default=None)
    
