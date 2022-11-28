from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostForecastFullDetailHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostForecastFullDetailRequests:
    planning_level_request: Optional[shared.PlanningLevelRequest] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    planning_level_request1: Optional[shared.PlanningLevelRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    planning_level_request2: Optional[shared.PlanningLevelRequest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostForecastFullDetailRequest:
    headers: PostForecastFullDetailHeaders = field()
    request: Optional[PostForecastFullDetailRequests] = field(default=None)
    

@dataclass
class PostForecastFullDetailResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    full_details_forecast_response: Optional[shared.FullDetailsForecastResponse] = field(default=None)
    
