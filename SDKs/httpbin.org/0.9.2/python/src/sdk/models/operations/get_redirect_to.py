from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetRedirectToQueryParams:
    url: str = field(metadata={'query_param': { 'field_name': 'url', 'style': 'form', 'explode': True }})
    status_code: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'status_code', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRedirectToRequest:
    query_params: GetRedirectToQueryParams = field()
    

@dataclass
class GetRedirectToResponse:
    content_type: str = field()
    status_code: int = field()
    
