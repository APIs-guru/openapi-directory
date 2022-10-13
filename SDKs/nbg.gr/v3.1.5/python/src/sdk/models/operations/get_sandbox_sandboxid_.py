from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class GetSandboxSandboxIDPathParams:
    sandbox_id: str = field(default=None, metadata={'path_param': { 'field_name': 'sandboxId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetSandboxSandboxIDSecurity:
    authorization_code_token: shared.SchemeAuthorizationCodeToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    client_id: shared.SchemeClientID = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetSandboxSandboxIDRequest:
    path_params: GetSandboxSandboxIDPathParams = field(default=None)
    security: GetSandboxSandboxIDSecurity = field(default=None)
    

@dataclass
class GetSandboxSandboxIDResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    headers: dict[str, List[str]] = field(default=None)
    sandbox: Optional[shared.Sandbox] = field(default=None)
    status_code: int = field(default=None)
    
