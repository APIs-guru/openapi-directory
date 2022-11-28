from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetPersonLoginGroupPathParams:
    login: str = field(metadata={'path_param': { 'field_name': 'login', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPersonLoginGroupSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetPersonLoginGroupRequest:
    path_params: GetPersonLoginGroupPathParams = field()
    security: GetPersonLoginGroupSecurity = field()
    

@dataclass
class GetPersonLoginGroupResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
