from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetVersionSecurity:
    access_token: shared.SchemeAccessToken = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class GetVersionRequest:
    security: GetVersionSecurity = field()
    

@dataclass
class GetVersionResponse:
    content_type: str = field()
    status_code: int = field()
    version: Optional[shared.Version] = field(default=None)
    
