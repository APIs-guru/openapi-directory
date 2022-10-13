from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class GetAPIVVersionMetalsBenchmarkHistoryPathParams:
    version: str = field(default=None, metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIVVersionMetalsBenchmarkHistoryQueryParams:
    currency: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'currency', 'style': 'form', 'explode': True }})
    end: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'end', 'style': 'form', 'explode': True }})
    format: Optional[shared.ResponseFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    historicalfx: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'historicalfx', 'style': 'form', 'explode': True }})
    interval: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'interval', 'style': 'form', 'explode': True }})
    metals: str = field(default=None, metadata={'query_param': { 'field_name': 'metals', 'style': 'form', 'explode': True }})
    start: datetime = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    token: str = field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    unitofmeasure: Optional[shared.UnitOfMeasureEnum] = field(default=None, metadata={'query_param': { 'field_name': 'unitofmeasure', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIVVersionMetalsBenchmarkHistoryRequest:
    path_params: GetAPIVVersionMetalsBenchmarkHistoryPathParams = field(default=None)
    query_params: GetAPIVVersionMetalsBenchmarkHistoryQueryParams = field(default=None)
    

@dataclass
class GetAPIVVersionMetalsBenchmarkHistoryResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    interval_collection_responses: Optional[List[shared.IntervalCollectionResponse]] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
