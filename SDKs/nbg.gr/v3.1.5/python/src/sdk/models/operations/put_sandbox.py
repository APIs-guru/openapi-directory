from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class PutSandboxRequests:
    sandbox: Optional[shared.Sandbox] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    sandbox1: Optional[shared.Sandbox] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutSandboxSecurity:
    authorization_code_token: shared.SchemeAuthorizationCodeToken = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    client_id: shared.SchemeClientID = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PutSandboxRequest:
    security: PutSandboxSecurity = field()
    request: Optional[PutSandboxRequests] = field(default=None)
    

@dataclass
class PutSandboxResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
