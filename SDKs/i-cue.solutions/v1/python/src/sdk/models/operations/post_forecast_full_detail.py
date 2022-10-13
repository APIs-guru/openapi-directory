from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostForecastFullDetailHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token' }})
    

@dataclass
class PostForecastFullDetailRequests:
    planning_level_request: Optional[shared.PlanningLevelRequest] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    planning_level_request1: Optional[shared.PlanningLevelRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    planning_level_request2: Optional[shared.PlanningLevelRequest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostForecastFullDetailRequest:
    headers: PostForecastFullDetailHeaders = field(default=None)
    request: Optional[PostForecastFullDetailRequests] = field(default=None)
    

@dataclass
class PostForecastFullDetailResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    full_details_forecast_response: Optional[shared.FullDetailsForecastResponse] = field(default=None)
    status_code: int = field(default=None)
    
