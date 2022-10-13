from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PutSandboxRequests:
    sandbox: Optional[shared.Sandbox] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    sandbox1: Optional[shared.Sandbox] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutSandboxSecurity:
    authorization_code_token: shared.SchemeAuthorizationCodeToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    client_id: shared.SchemeClientID = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PutSandboxRequest:
    request: Optional[PutSandboxRequests] = field(default=None)
    security: PutSandboxSecurity = field(default=None)
    

@dataclass
class PutSandboxResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    status_code: int = field(default=None)
    
