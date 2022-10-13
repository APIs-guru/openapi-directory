from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class GetAPIVVersionMetalsSupportedCurrencyPathParams:
    version: str = field(default=None, metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIVVersionMetalsSupportedCurrencyQueryParams:
    format: Optional[shared.ResponseFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    token: str = field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIVVersionMetalsSupportedCurrencyRequest:
    path_params: GetAPIVVersionMetalsSupportedCurrencyPathParams = field(default=None)
    query_params: GetAPIVVersionMetalsSupportedCurrencyQueryParams = field(default=None)
    

@dataclass
class GetAPIVVersionMetalsSupportedCurrencyResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    get_api_v_version_metals_supported_currency_200_application_json_strings: Optional[List[str]] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    status_code: int = field(default=None)
    
