from dataclasses import dataclass, field



@dataclass
class SetUnreadPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetUnreadSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SetUnreadRequest:
    path_params: SetUnreadPathParams = field(default=None)
    security: SetUnreadSecurity = field(default=None)
    

@dataclass
class SetUnreadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
