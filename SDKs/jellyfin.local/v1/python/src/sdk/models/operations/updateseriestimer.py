from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class UpdateSeriesTimerPathParams:
    timer_id: str = field(metadata={'path_param': { 'field_name': 'timerId', 'style': 'simple', 'explode': False }})
    

@dataclass
class UpdateSeriesTimerRequests:
    series_timer_info_dto: Optional[shared.SeriesTimerInfoDto] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    series_timer_info_dto1: Optional[shared.SeriesTimerInfoDto] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    series_timer_info_dto2: Optional[shared.SeriesTimerInfoDto] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class UpdateSeriesTimerSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class UpdateSeriesTimerRequest:
    path_params: UpdateSeriesTimerPathParams = field()
    security: UpdateSeriesTimerSecurity = field()
    request: Optional[UpdateSeriesTimerRequests] = field(default=None)
    

@dataclass
class UpdateSeriesTimerResponse:
    content_type: str = field()
    status_code: int = field()
    
