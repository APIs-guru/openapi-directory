from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetKeyByIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetKeyByIDSecurity:
    cookie_sid: shared.SchemeCookieSid = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'cookie' }})
    

@dataclass
class GetKeyByIDRequest:
    path_params: GetKeyByIDPathParams = field()
    security: GetKeyByIDSecurity = field()
    

@dataclass
class GetKeyByIDResponse:
    content_type: str = field()
    status_code: int = field()
    key: Optional[shared.Key] = field(default=None)
    
