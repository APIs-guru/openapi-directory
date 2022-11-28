from dataclasses import dataclass, field
from typing import Optional
from enum import Enum

class GetFormatEnum(str, Enum):
    JSON = "json"
    XML = "xml"


@dataclass
class GetQueryParams:
    ip: str = field(metadata={'query_param': { 'field_name': 'ip', 'style': 'form', 'explode': True }})
    key: str = field(metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    format: Optional[GetFormatEnum] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    package: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'package', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRequest:
    query_params: GetQueryParams = field()
    

@dataclass
class GetResponse:
    content_type: str = field()
    status_code: int = field()
    get_200_text_html_string: Optional[str] = field(default=None)
    
