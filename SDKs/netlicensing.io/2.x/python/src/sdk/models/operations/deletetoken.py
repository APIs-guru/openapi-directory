from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class DeleteTokenPathParams:
    token_number: str = field(default=None, metadata={'path_param': { 'field_name': 'tokenNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteTokenSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class DeleteTokenRequest:
    path_params: DeleteTokenPathParams = field(default=None)
    security: DeleteTokenSecurity = field(default=None)
    

@dataclass
class DeleteTokenResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    
