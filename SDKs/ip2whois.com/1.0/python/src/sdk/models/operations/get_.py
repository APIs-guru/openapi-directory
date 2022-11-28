from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetQueryParams:
    domain: str = field(metadata={'query_param': { 'field_name': 'domain', 'style': 'form', 'explode': True }})
    key: str = field(metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    format: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRequest:
    query_params: GetQueryParams = field()
    

@dataclass
class GetResponse:
    content_type: str = field()
    status_code: int = field()
    get_200_text_html_string: Optional[str] = field(default=None)
    
