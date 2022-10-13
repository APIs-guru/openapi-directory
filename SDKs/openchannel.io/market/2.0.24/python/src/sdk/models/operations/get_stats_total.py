from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetStatsTotalQueryParams:
    end: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'end', 'style': 'form', 'explode': True }})
    fields: str = field(default=None, metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclass
class GetStatsTotalRequest:
    query_params: GetStatsTotalQueryParams = field(default=None)
    

@dataclass
class GetStatsTotalResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
