from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AuthenticateUserByNameRequests:
    authenticate_user_by_name: Optional[shared.AuthenticateUserByName] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    authenticate_user_by_name1: Optional[shared.AuthenticateUserByName] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    authenticate_user_by_name2: Optional[shared.AuthenticateUserByName] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class AuthenticateUserByNameRequest:
    request: AuthenticateUserByNameRequests = field()
    

@dataclass
class AuthenticateUserByNameResponse:
    content_type: str = field()
    status_code: int = field()
    authentication_result: Optional[shared.AuthenticationResult] = field(default=None)
    
