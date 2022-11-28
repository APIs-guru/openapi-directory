from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class OsBrowsersQueryParams:
    os: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'os', 'style': 'form', 'explode': True }})
    

@dataclass
class OsBrowsersSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class OsBrowsersRequest:
    query_params: OsBrowsersQueryParams = field()
    security: OsBrowsersSecurity = field()
    

@dataclass
class OsBrowsersResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied: Optional[Any] = field(default=None)
    os_browsers: Optional[Any] = field(default=None)
    
