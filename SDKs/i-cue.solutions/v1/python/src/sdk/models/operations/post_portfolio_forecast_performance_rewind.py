from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostPortfolioForecastPerformanceRewindHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostPortfolioForecastPerformanceRewindRequests:
    forecast_performance_request: Optional[shared.ForecastPerformanceRequest] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    forecast_performance_request1: Optional[shared.ForecastPerformanceRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    forecast_performance_request2: Optional[shared.ForecastPerformanceRequest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostPortfolioForecastPerformanceRewindRequest:
    headers: PostPortfolioForecastPerformanceRewindHeaders = field()
    request: Optional[PostPortfolioForecastPerformanceRewindRequests] = field(default=None)
    

@dataclass
class PostPortfolioForecastPerformanceRewindResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    rewind_response: Optional[shared.RewindResponse] = field(default=None)
    
