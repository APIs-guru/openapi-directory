from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetTokenPathParams:
    token_number: str = field(default=None, metadata={'path_param': { 'field_name': 'tokenNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTokenSecurity:
    basic_auth: shared.SchemeBasicAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetTokenRequest:
    path_params: GetTokenPathParams = field(default=None)
    security: GetTokenSecurity = field(default=None)
    

@dataclass
class GetTokenResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    
