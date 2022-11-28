from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetV1EmailDisposableFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclass
class GetV1EmailDisposableQueryParams:
    email: str = field(metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    key: str = field(metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    format: Optional[GetV1EmailDisposableFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclass
class GetV1EmailDisposableRequest:
    query_params: GetV1EmailDisposableQueryParams = field()
    

@dataclass
class GetV1EmailDisposableResponse:
    content_type: str = field()
    status_code: int = field()
    get_v1_email_disposable_200_application_json_string: Optional[str] = field(default=None)
    
