from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutAdministrationUserLockHeaders:
    token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutAdministrationUserLockRequests:
    toggle_user_request: Optional[shared.ToggleUserRequest] = field(default=None, metadata={'request': { 'media_type': 'application/*+json' }})
    toggle_user_request1: Optional[shared.ToggleUserRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    toggle_user_request2: Optional[shared.ToggleUserRequest] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    

@dataclass
class PutAdministrationUserLockRequest:
    headers: PutAdministrationUserLockHeaders = field(default=None)
    request: Optional[PutAdministrationUserLockRequests] = field(default=None)
    

@dataclass
class PutAdministrationUserLockResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
