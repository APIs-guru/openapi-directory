from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostPortfolioForecastPerformanceRewindHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token' }})
    

@dataclass
class PostPortfolioForecastPerformanceRewindRequests:
    forecast_performance_request: Optional[shared.ForecastPerformanceRequest] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    forecast_performance_request1: Optional[shared.ForecastPerformanceRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    forecast_performance_request2: Optional[shared.ForecastPerformanceRequest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PostPortfolioForecastPerformanceRewindRequest:
    headers: PostPortfolioForecastPerformanceRewindHeaders = field(default=None)
    request: Optional[PostPortfolioForecastPerformanceRewindRequests] = field(default=None)
    

@dataclass
class PostPortfolioForecastPerformanceRewindResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    rewind_response: Optional[shared.RewindResponse] = field(default=None)
    status_code: int = field(default=None)
    
