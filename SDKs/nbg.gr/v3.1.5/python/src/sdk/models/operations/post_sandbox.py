from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PostSandboxRequests:
    sandbox_request: Optional[shared.SandboxRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    sandbox_request1: Optional[shared.SandboxRequest] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostSandboxSecurity:
    authorization_code_token: shared.SchemeAuthorizationCodeToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    client_id: shared.SchemeClientID = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostSandboxRequest:
    request: Optional[PostSandboxRequests] = field(default=None)
    security: PostSandboxSecurity = field(default=None)
    

@dataclass
class PostSandboxResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    sandbox: Optional[shared.Sandbox] = field(default=None)
    status_code: int = field(default=None)
    
