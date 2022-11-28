from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetAPIVVersionCurrenciesHistorySupportedPathParams:
    version: str = field(metadata={'path_param': { 'field_name': 'version', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetAPIVVersionCurrenciesHistorySupportedQueryParams:
    token: str = field(metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    format: Optional[shared.ResponseFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAPIVVersionCurrenciesHistorySupportedRequest:
    path_params: GetAPIVVersionCurrenciesHistorySupportedPathParams = field()
    query_params: GetAPIVVersionCurrenciesHistorySupportedQueryParams = field()
    

@dataclass
class GetAPIVVersionCurrenciesHistorySupportedResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    get_api_v_version_currencies_history_supported_200_application_json_strings: Optional[List[str]] = field(default=None)
    problem_details: Optional[dict[str, Any]] = field(default=None)
    
