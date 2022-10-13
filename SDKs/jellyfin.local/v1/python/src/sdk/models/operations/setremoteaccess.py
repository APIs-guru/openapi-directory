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
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SetRemoteAccessRequest:
    request: SetRemoteAccessRequests = field(default=None)
    security: SetRemoteAccessSecurity = field(default=None)
    

@dataclass
class SetRemoteAccessResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
