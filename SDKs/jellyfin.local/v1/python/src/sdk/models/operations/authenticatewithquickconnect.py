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
    request: AuthenticateWithQuickConnectRequests = field()
    

@dataclass
class AuthenticateWithQuickConnectResponse:
    content_type: str = field()
    status_code: int = field()
    authentication_result: Optional[shared.AuthenticationResult] = field(default=None)
    
