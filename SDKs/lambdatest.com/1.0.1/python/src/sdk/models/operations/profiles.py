from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ProfilesSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ProfilesRequest:
    security: ProfilesSecurity = field()
    

@dataclass
class ProfilesResponse:
    content_type: str = field()
    status_code: int = field()
    access_denied: Optional[Any] = field(default=None)
    profiles: Optional[shared.Profiles] = field(default=None)
    
