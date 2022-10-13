from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class GetAPIVVersionCurrenciesRatePathParams:
    version: str = field(default=None, metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIVVersionCurrenciesRateQueryParams:
    format: Optional[shared.ResponseFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    pairs: str = field(default=None, metadata={'query_param': { 'field_name': 'pairs', 'style': 'form', 'explode': True }})
    token: str = field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIVVersionCurrenciesRateRequest:
    path_params: GetAPIVVersionCurrenciesRatePathParams = field(default=None)
    query_params: GetAPIVVersionCurrenciesRateQueryParams = field(default=None)
    

@dataclass
class GetAPIVVersionCurrenciesRateResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    rate_responses: Optional[List[shared.RateResponse]] = field(default=None)
    status_code: int = field(default=None)
    
