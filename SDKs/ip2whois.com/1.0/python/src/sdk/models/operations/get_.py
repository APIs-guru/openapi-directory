from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetQueryParams:
    domain: str = field(default=None, metadata={'query_param': { 'field_name': 'domain', 'style': 'form', 'explode': True }})
    format: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'format', 'style': 'form', 'explode': True }})
    key: str = field(default=None, metadata={'query_param': { 'field_name': 'key', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRequest:
    query_params: GetQueryParams = field(default=None)
    

@dataclass
class GetResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
