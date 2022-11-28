from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ResolutionsSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ResolutionsRequest:
    security: ResolutionsSecurity = field()
    

@dataclass
class ResolutionsResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied: Optional[Any] = field(default=None)
    resolutions: Optional[Any] = field(default=None)
    
