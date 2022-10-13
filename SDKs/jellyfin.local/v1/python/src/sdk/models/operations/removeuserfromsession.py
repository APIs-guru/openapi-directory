from dataclasses import dataclass, field



@dataclass
class RemoveUserFromSessionPathParams:
    session_id: str = field(default=None, metadata={'path_param': { 'field_name': 'sessionId', 'style': 'simple', 'explode': False }})
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveUserFromSessionSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class RemoveUserFromSessionRequest:
    path_params: RemoveUserFromSessionPathParams = field(default=None)
    security: RemoveUserFromSessionSecurity = field(default=None)
    

@dataclass
class RemoveUserFromSessionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
