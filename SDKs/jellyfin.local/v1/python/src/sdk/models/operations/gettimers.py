from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTimersQueryParams:
    channel_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'channelId', 'style': 'form', 'explode': True }})
    is_active: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isActive', 'style': 'form', 'explode': True }})
    is_scheduled: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'isScheduled', 'style': 'form', 'explode': True }})
    series_timer_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'seriesTimerId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetTimersSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetTimersRequest:
    query_params: GetTimersQueryParams = field()
    security: GetTimersSecurity = field()
    

@dataclass
class GetTimersResponse:
    content_type: str = field()
    status_code: int = field()
    timer_info_dto_query_result: Optional[shared.TimerInfoDtoQueryResult] = field(default=None)
    
