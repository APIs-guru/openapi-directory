from dataclasses import dataclass, field
from typing import Any,Enum,List,Optional
from sdk.models import shared


@dataclass
class VerifySearchPathParams:
    format: shared.FormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class VerifySearchQueryParams:
    api_key: str = field(default=None, metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    api_secret: str = field(default=None, metadata={'query_param': { 'field_name': 'api_secret', 'style': 'form', 'explode': True }})
    request_id: str = field(default=None, metadata={'query_param': { 'field_name': 'request_id', 'style': 'form', 'explode': True }})
    request_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'request_ids', 'style': 'form', 'explode': True }})
    

@dataclass
class VerifySearchRequest:
    path_params: VerifySearchPathParams = field(default=None)
    query_params: VerifySearchQueryParams = field(default=None)
    

@dataclass
class VerifySearchResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    verify_search_200_application_json_one_of: Optional[Any] = field(default=None)
    
