from dataclasses import dataclass, field
from typing import Any,List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class VerifySearchPathParams:
    format: shared.FormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class VerifySearchQueryParams:
    api_key: str = field(metadata={'query_param': { 'field_name': 'api_key', 'style': 'form', 'explode': True }})
    api_secret: str = field(metadata={'query_param': { 'field_name': 'api_secret', 'style': 'form', 'explode': True }})
    request_id: str = field(metadata={'query_param': { 'field_name': 'request_id', 'style': 'form', 'explode': True }})
    request_ids: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'request_ids', 'style': 'form', 'explode': True }})
    

@dataclass
class VerifySearchRequest:
    path_params: VerifySearchPathParams = field()
    query_params: VerifySearchQueryParams = field()
    

@dataclass
class VerifySearchResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    verify_search_200_application_json_one_of: Optional[Any] = field(default=None)
    
