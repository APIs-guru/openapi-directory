from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CreateSeriesTimerRequests:
    series_timer_info_dto: Optional[shared.SeriesTimerInfoDto] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    series_timer_info_dto1: Optional[shared.SeriesTimerInfoDto] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    series_timer_info_dto2: Optional[shared.SeriesTimerInfoDto] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class CreateSeriesTimerSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CreateSeriesTimerRequest:
    request: Optional[CreateSeriesTimerRequests] = field(default=None)
    security: CreateSeriesTimerSecurity = field(default=None)
    

@dataclass
class CreateSeriesTimerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
