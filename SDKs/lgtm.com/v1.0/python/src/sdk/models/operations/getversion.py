from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetVersionSecurity:
    access_token: shared.SchemeAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetVersionRequest:
    security: GetVersionSecurity = field(default=None)
    

@dataclass
class GetVersionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    version: Optional[shared.Version] = field(default=None)
    
