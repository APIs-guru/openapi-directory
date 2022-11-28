from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAddWordQueryParams:
    author: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'author', 'style': 'form', 'explode': True }})
    definition: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'definition', 'style': 'form', 'explode': True }})
    related: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'related', 'style': 'form', 'explode': True }})
    word: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'word', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAddWordRequest:
    query_params: GetAddWordQueryParams = field()
    

@dataclass
class GetAddWordResponse:
    content_type: str = field()
    status_code: int = field()
    
