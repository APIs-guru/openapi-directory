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
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CreateSeriesTimerRequest:
    security: CreateSeriesTimerSecurity = field()
    request: Optional[CreateSeriesTimerRequests] = field(default=None)
    

@dataclass
class CreateSeriesTimerResponse:
    content_type: str = field()
    status_code: int = field()
    
