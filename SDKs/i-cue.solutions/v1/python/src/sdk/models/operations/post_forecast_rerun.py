from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostForecastRerunHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostForecastRerunRequests:
    planning_level_re_run_request: Optional[shared.PlanningLevelReRunRequest] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    planning_level_re_run_request1: Optional[shared.PlanningLevelReRunRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    planning_level_re_run_request2: Optional[shared.PlanningLevelReRunRequest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostForecastRerunRequest:
    headers: PostForecastRerunHeaders = field()
    request: Optional[PostForecastRerunRequests] = field(default=None)
    

@dataclass
class PostForecastRerunResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    forecast_response: Optional[shared.ForecastResponse] = field(default=None)
    
