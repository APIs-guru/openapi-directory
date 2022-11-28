from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from sdk.models import shared


@dataclass
class RetrieveNearEarthObjectFeedQueryParams:
    detailed: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'detailed', 'style': 'form', 'explode': True }})
    end_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'end_date', 'style': 'form', 'explode': True }})
    start_date: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'start_date', 'style': 'form', 'explode': True }})
    

@dataclass
class RetrieveNearEarthObjectFeedRequest:
    query_params: RetrieveNearEarthObjectFeedQueryParams = field()
    

@dataclass
class RetrieveNearEarthObjectFeedResponse:
    content_type: str = field()
    status_code: int = field()
    near_earth_object_list: Optional[shared.NearEarthObjectList] = field(default=None)
    
