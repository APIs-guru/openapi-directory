from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetStatsTotalQueryParams:
    fields: str = field(metadata={'query_param': { 'field_name': 'fields', 'style': 'form', 'explode': True }})
    end: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'end', 'style': 'form', 'explode': True }})
    query: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'query', 'style': 'form', 'explode': True }})
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclass
class GetStatsTotalRequest:
    query_params: GetStatsTotalQueryParams = field()
    

@dataclass
class GetStatsTotalResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
