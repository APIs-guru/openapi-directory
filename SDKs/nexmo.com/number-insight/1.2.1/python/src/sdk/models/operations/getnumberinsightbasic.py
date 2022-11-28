from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetNumberInsightBasicPathParams:
    format: shared.FormatEnum = field(metadata={'path_param': { 'field_name': 'format', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNumberInsightBasicQueryParams:
    number: str = field(metadata={'query_param': { 'field_name': 'number', 'style': 'form', 'explode': True }})
    country: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'country', 'style': 'form', 'explode': True }})
    

@dataclass
class GetNumberInsightBasicRequest:
    path_params: GetNumberInsightBasicPathParams = field()
    query_params: GetNumberInsightBasicQueryParams = field()
    

@dataclass
class GetNumberInsightBasicResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    ni_response_json_basic: Optional[shared.NiResponseJSONBasic] = field(default=None)
    
