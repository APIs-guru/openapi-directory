from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class GetTokenPathParams:
    token_number: str = field(metadata={'path_param': { 'field_name': 'tokenNumber', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTokenSecurity:
    basic_auth: shared.SchemeBasicAuth = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetTokenRequest:
    path_params: GetTokenPathParams = field()
    security: GetTokenSecurity = field()
    

@dataclass
class GetTokenResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    netlicensing: Optional[Any] = field(default=None)
    
