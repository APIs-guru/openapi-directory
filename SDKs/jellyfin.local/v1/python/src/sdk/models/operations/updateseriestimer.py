from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateSeriesTimerPathParams:
    timer_id: str = field(default=None, metadata={'path_param': { 'field_name': 'timerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSeriesTimerRequests:
    series_timer_info_dto: Optional[shared.SeriesTimerInfoDto] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    series_timer_info_dto1: Optional[shared.SeriesTimerInfoDto] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    series_timer_info_dto2: Optional[shared.SeriesTimerInfoDto] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdateSeriesTimerSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateSeriesTimerRequest:
    path_params: UpdateSeriesTimerPathParams = field(default=None)
    request: Optional[UpdateSeriesTimerRequests] = field(default=None)
    security: UpdateSeriesTimerSecurity = field(default=None)
    

@dataclass
class UpdateSeriesTimerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
