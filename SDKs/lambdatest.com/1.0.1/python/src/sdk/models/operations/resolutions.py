from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ResolutionsSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ResolutionsRequest:
    security: ResolutionsSecurity = field(default=None)
    

@dataclass
class ResolutionsResponse:
    access_denied: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    resolutions: Optional[Any] = field(default=None)
    
