from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetCookiesDeleteQueryParams:
    freeform: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'freeform', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCookiesDeleteRequest:
    query_params: GetCookiesDeleteQueryParams = field(default=None)
    

@dataclass
class GetCookiesDeleteResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
