from dataclasses import dataclass, field
from typing import Enum,Optional

class GetV1EmailDisposableFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclass
class GetV1EmailDisposableQueryParams:
    email: str = field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    format: Optional[GetV1EmailDisposableFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    key: str = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    

@dataclass
class GetV1EmailDisposableRequest:
    query_params: GetV1EmailDisposableQueryParams = field(default=None)
    

@dataclass
class GetV1EmailDisposableResponse:
    content_type: str = field(default=None)
    get_v1_email_disposable_200_application_json_string: Optional[str] = field(default=None)
    status_code: int = field(default=None)
    
