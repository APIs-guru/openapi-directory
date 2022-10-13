from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class GetAPIVVersionCurrenciesHistoryPathParams:
    version: str = field(default=None, metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIVVersionCurrenciesHistoryQueryParams:
    end: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'end', 'style': 'form', 'explode': True }})
    format: Optional[shared.ResponseFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    interval: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'interval', 'style': 'form', 'explode': True }})
    pairs: str = field(default=None, metadata={'query_param': { 'field_name': 'pairs', 'style': 'form', 'explode': True }})
    start: datetime = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    token: str = field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIVVersionCurrenciesHistoryRequest:
    path_params: GetAPIVVersionCurrenciesHistoryPathParams = field(default=None)
    query_params: GetAPIVVersionCurrenciesHistoryQueryParams = field(default=None)
    

@dataclass
class GetAPIVVersionCurrenciesHistoryResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    interval_collection_responses: Optional[List[shared.IntervalCollectionResponse]] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
