from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetAPIVVersionMetalsSpotHistoryPathParams:
    version: str = field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIVVersionMetalsSpotHistoryQueryParams:
    metals: str = field(metadata={'query_param': { 'field_name': 'metals', 'style': 'form', 'explode': True }})
    start: datetime = field(metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    token: str = field(metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    currency: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'currency', 'style': 'form', 'explode': True }})
    end: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'end', 'style': 'form', 'explode': True }})
    format: Optional[shared.ResponseFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    historicalfx: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'historicalfx', 'style': 'form', 'explode': True }})
    interval: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'interval', 'style': 'form', 'explode': True }})
    unitofmeasure: Optional[shared.UnitOfMeasureEnum] = field(default=None, metadata={'query_param': { 'field_name': 'unitofmeasure', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIVVersionMetalsSpotHistoryRequest:
    path_params: GetAPIVVersionMetalsSpotHistoryPathParams = field()
    query_params: GetAPIVVersionMetalsSpotHistoryQueryParams = field()
    

@dataclass
class GetAPIVVersionMetalsSpotHistoryResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    interval_collection_responses: Optional[List[shared.IntervalCollectionResponse]] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
