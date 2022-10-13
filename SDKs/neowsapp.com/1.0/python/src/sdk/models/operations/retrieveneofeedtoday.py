from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class RetrieveNeoFeedTodayQueryParams:
    detailed: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'detailed', 'style': 'form', 'explode': True }})
    

@dataclass
class RetrieveNeoFeedTodayRequest:
    query_params: RetrieveNeoFeedTodayQueryParams = field(default=None)
    

@dataclass
class RetrieveNeoFeedTodayResponse:
    content_type: str = field(default=None)
    near_earth_object_list: Optional[shared.NearEarthObjectList] = field(default=None)
    status_code: int = field(default=None)
    
