from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class OsBrowsersQueryParams:
    os: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'os', 'style': 'form', 'explode': True }})
    

@dataclass
class OsBrowsersSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class OsBrowsersRequest:
    query_params: OsBrowsersQueryParams = field(default=None)
    security: OsBrowsersSecurity = field(default=None)
    

@dataclass
class OsBrowsersResponse:
    access_denied: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    os_browsers: Optional[Any] = field(default=None)
    
