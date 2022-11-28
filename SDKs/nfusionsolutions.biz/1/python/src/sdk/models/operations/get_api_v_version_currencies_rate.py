from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetAPIVVersionCurrenciesRatePathParams:
    version: str = field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIVVersionCurrenciesRateQueryParams:
    pairs: str = field(metadata={'query_param': { 'field_name': 'pairs', 'style': 'form', 'explode': True }})
    token: str = field(metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    format: Optional[shared.ResponseFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIVVersionCurrenciesRateRequest:
    path_params: GetAPIVVersionCurrenciesRatePathParams = field()
    query_params: GetAPIVVersionCurrenciesRateQueryParams = field()
    

@dataclass
class GetAPIVVersionCurrenciesRateResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    rate_responses: Optional[List[shared.RateResponse]] = field(default=None)
    
