from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetCookiesDeleteQueryParams:
    freeform: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'freeform', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCookiesDeleteRequest:
    query_params: GetCookiesDeleteQueryParams = field()
    

@dataclass
class GetCookiesDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    
