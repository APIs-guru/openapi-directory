from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class ProfilesSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class ProfilesRequest:
    security: ProfilesSecurity = field(default=None)
    

@dataclass
class ProfilesResponse:
    access_denied: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    profiles: Optional[shared.Profiles] = field(default=None)
    
