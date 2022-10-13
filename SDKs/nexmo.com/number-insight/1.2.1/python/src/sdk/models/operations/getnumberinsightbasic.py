from dataclasses import dataclass, field
from typing import Enum,Optional
from sdk.models import shared


@dataclass
class GetNumberInsightBasicPathParams:
    format: shared.FormatEnum = field(default=None, metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNumberInsightBasicQueryParams:
    country: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    number: str = field(default=None, metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNumberInsightBasicRequest:
    path_params: GetNumberInsightBasicPathParams = field(default=None)
    query_params: GetNumberInsightBasicQueryParams = field(default=None)
    

@dataclass
class GetNumberInsightBasicResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    ni_response_json_basic: Optional[shared.NiResponseJSONBasic] = field(default=None)
    
