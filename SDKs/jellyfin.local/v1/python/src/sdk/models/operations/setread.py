from dataclasses import dataclass, field



@dataclass
class SetReadPathParams:
    user_id: str = field(default=None, metadata={'path_param': { 'field_name': 'userId', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetReadSecurity:
    custom_authentication: shared.SchemeCustomAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class SetReadRequest:
    path_params: SetReadPathParams = field(default=None)
    security: SetReadSecurity = field(default=None)
    

@dataclass
class SetReadResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
