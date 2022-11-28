from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class SetRemoteAccessRequests:
    startup_remote_access_dto: Optional[shared.StartupRemoteAccessDto] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    startup_remote_access_dto1: Optional[shared.StartupRemoteAccessDto] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    startup_remote_access_dto2: Optional[shared.StartupRemoteAccessDto] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class SetRemoteAccessSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SetRemoteAccessRequest:
    request: SetRemoteAccessRequests = field()
    security: SetRemoteAccessSecurity = field()
    

@dataclass
class SetRemoteAccessResponse:
    content_type: str = field()
    status_code: int = field()
    
