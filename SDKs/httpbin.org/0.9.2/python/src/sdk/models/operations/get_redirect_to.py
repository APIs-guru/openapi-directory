from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetRedirectToQueryParams:
    status_code: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'status_code', 'style': 'form', 'explode': True }})
    url: str = field(default=None, metadata={'query_param': { 'field_name': 'url', 'style': 'form', 'explode': True }})
    

@dataclass
class GetRedirectToRequest:
    query_params: GetRedirectToQueryParams = field(default=None)
    

@dataclass
class GetRedirectToResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
