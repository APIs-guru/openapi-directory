from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AuthenticateWithQuickConnectRequests:
    quick_connect_dto: Optional[shared.QuickConnectDto] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    quick_connect_dto1: Optional[shared.QuickConnectDto] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    quick_connect_dto2: Optional[shared.QuickConnectDto] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class AuthenticateWithQuickConnectRequest:
    request: AuthenticateWithQuickConnectRequests = field(default=None)
    

@dataclass
class AuthenticateWithQuickConnectResponse:
    authentication_result: Optional[shared.AuthenticationResult] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
