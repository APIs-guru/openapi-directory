from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetCookiesSetQueryParams:
    freeform: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'freeform', 'style': 'form', 'explode': True }})
    

@dataclass
class GetCookiesSetRequest:
    query_params: GetCookiesSetQueryParams = field(default=None)
    

@dataclass
class GetCookiesSetResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
