from dataclasses import dataclass, field



@dataclass
class SessionControllerResetPasswordPathParams:
    short_name: str = field(default=None, metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclass
class SessionControllerResetPasswordQueryParams:
    email: str = field(default=None, metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    

@dataclass
class SessionControllerResetPasswordRequest:
    path_params: SessionControllerResetPasswordPathParams = field(default=None)
    query_params: SessionControllerResetPasswordQueryParams = field(default=None)
    

@dataclass
class SessionControllerResetPasswordResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
