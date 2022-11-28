from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class DeleteSandboxSandboxIDPathParams:
    sandbox_id: str = field(metadata={'path_param': { 'field_name': 'sandboxId', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteSandboxSandboxIDSecurity:
    authorization_code_token: shared.SchemeAuthorizationCodeToken = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    client_id: shared.SchemeClientID = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteSandboxSandboxIDRequest:
    path_params: DeleteSandboxSandboxIDPathParams = field()
    security: DeleteSandboxSandboxIDSecurity = field()
    

@dataclass
class DeleteSandboxSandboxIDResponse:
    content_type: str = field()
    headers: dict[str, List[str]] = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    
