from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class GetAPIVVersionCurrenciesRateSupportedPathParams:
    version: str = field(default=None, metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIVVersionCurrenciesRateSupportedQueryParams:
    format: Optional[shared.ResponseFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    token: str = field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIVVersionCurrenciesRateSupportedRequest:
    path_params: GetAPIVVersionCurrenciesRateSupportedPathParams = field(default=None)
    query_params: GetAPIVVersionCurrenciesRateSupportedQueryParams = field(default=None)
    

@dataclass
class GetAPIVVersionCurrenciesRateSupportedResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    get_api_v_version_currencies_rate_supported_200_application_json_strings: Optional[List[str]] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
