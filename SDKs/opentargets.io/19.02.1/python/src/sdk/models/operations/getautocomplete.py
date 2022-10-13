from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetAutocompleteQueryParams:
    q: str = field(default=None, metadata={'query_param': { 'field_name': 'q', 'style': 'form', 'explode': True }})
    size: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'size', 'style': 'form', 'explode': True }})
    

@dataclass
class GetAutocompleteRequest:
    query_params: GetAutocompleteQueryParams = field(default=None)
    

@dataclass
class GetAutocompleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
