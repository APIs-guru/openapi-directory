from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetDefaultTimerQueryParams:
    program_id: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'programId', 'style': 'form', 'explode': True }})
    

@dataclass
class GetDefaultTimerSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetDefaultTimerRequest:
    query_params: GetDefaultTimerQueryParams = field(default=None)
    security: GetDefaultTimerSecurity = field(default=None)
    

@dataclass
class GetDefaultTimerResponse:
    content_type: str = field(default=None)
    series_timer_info_dto: Optional[shared.SeriesTimerInfoDto] = field(default=None)
    status_code: int = field(default=None)
    
