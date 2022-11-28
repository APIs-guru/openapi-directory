from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDefaultTimerQueryParams:
    program_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'programId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDefaultTimerSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetDefaultTimerRequest:
    query_params: GetDefaultTimerQueryParams = field()
    security: GetDefaultTimerSecurity = field()
    

@dataclass
class GetDefaultTimerResponse:
    content_type: str = field()
    status_code: int = field()
    series_timer_info_dto: Optional[shared.SeriesTimerInfoDto] = field(default=None)
    
