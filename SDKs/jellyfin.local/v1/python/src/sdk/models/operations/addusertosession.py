from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class AddUserToSessionPathParams:
    session_id: str = field(metadata={'path_param': { 'field_name': 'sessionId', 'style': 'simple', 'explode': False }})
    user_id: str = field(metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddUserToSessionSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AddUserToSessionRequest:
    path_params: AddUserToSessionPathParams = field()
    security: AddUserToSessionSecurity = field()
    

@dataclass
class AddUserToSessionResponse:
    content_type: str = field()
    status_code: int = field()
    
