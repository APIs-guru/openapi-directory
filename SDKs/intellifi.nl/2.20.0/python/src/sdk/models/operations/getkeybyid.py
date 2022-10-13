from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetKeyByIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetKeyByIDSecurity:
    cookie_sid: shared.SchemeCookieSid = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'cookie' }})
    

@dataclass
class GetKeyByIDRequest:
    path_params: GetKeyByIDPathParams = field(default=None)
    security: GetKeyByIDSecurity = field(default=None)
    

@dataclass
class GetKeyByIDResponse:
    content_type: str = field(default=None)
    key: Optional[shared.Key] = field(default=None)
    status_code: int = field(default=None)
    
