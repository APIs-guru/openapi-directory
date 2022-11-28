from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class SetReadPathParams:
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetReadSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SetReadRequest:
    path_params: SetReadPathParams = field()
    security: SetReadSecurity = field()
    

@dataclass
class SetReadResponse:
    content_type: str = field()
    status_code: int = field()
    
