from dataclasses import dataclass, field
from typing import Enum,Optional

class GetV1EmailFreeFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclass
class GetV1EmailFreeQueryParams:
    email: str = field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    format: Optional[GetV1EmailFreeFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    key: str = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    

@dataclass
class GetV1EmailFreeRequest:
    query_params: GetV1EmailFreeQueryParams = field(default=None)
    

@dataclass
class GetV1EmailFreeResponse:
    content_type: str = field(default=None)
    get_v1_email_free_200_application_json_string: Optional[str] = field(default=None)
    status_code: int = field(default=None)
    
