from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetAPIVVersionMetalsSpotRatioHistoryPathParams:
    version: str = field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIVVersionMetalsSpotRatioHistoryQueryParams:
    pairs: str = field(metadata={'query_param': { 'field_name': 'pairs', 'style': 'form', 'explode': True }})
    start: datetime = field(metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    token: str = field(metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    end: Optional[datetime] = field(default=None, metadata={'query_param': { 'field_name': 'end', 'style': 'form', 'explode': True }})
    format: Optional[shared.ResponseFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    interval: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'interval', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIVVersionMetalsSpotRatioHistoryRequest:
    path_params: GetAPIVVersionMetalsSpotRatioHistoryPathParams = field()
    query_params: GetAPIVVersionMetalsSpotRatioHistoryQueryParams = field()
    

@dataclass
class GetAPIVVersionMetalsSpotRatioHistoryResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    interval_collection_responses: Optional[List[shared.IntervalCollectionResponse]] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
