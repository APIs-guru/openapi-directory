from dataclasses import dataclass, field



@dataclass
class AddUserToSessionPathParams:
    session_id: str = field(default=None, metadata={'path_param': { 'field_name': 'sessionId', 'style': 'simple', 'explode': False }})
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddUserToSessionSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AddUserToSessionRequest:
    path_params: AddUserToSessionPathParams = field(default=None)
    security: AddUserToSessionSecurity = field(default=None)
    

@dataclass
class AddUserToSessionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
