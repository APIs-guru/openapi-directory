from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class GetSeriesTimersQueryParams:
    sort_by: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sortBy', 'style': 'form', 'explode': True }})
    sort_order: Optional[shared.SortOrderEnum] = field(default=None, metadata={'query_param': { 'field_name': 'sortOrder', 'style': 'form', 'explode': True }})
    

@dataclass
class GetSeriesTimersSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetSeriesTimersRequest:
    query_params: GetSeriesTimersQueryParams = field(default=None)
    security: GetSeriesTimersSecurity = field(default=None)
    

@dataclass
class GetSeriesTimersResponse:
    content_type: str = field(default=None)
    series_timer_info_dto_query_result: Optional[shared.SeriesTimerInfoDtoQueryResult] = field(default=None)
    status_code: int = field(default=None)
    
