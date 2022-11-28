from dataclasses import dataclass, field



@dataclass
class SessionControllerResetPasswordPathParams:
    short_name: str = field(metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclass
class SessionControllerResetPasswordQueryParams:
    email: str = field(metadata={'query_param': { 'field_name': 'email', 'style': 'form', 'explode': True }})
    

@dataclass
class SessionControllerResetPasswordRequest:
    path_params: SessionControllerResetPasswordPathParams = field()
    query_params: SessionControllerResetPasswordQueryParams = field()
    

@dataclass
class SessionControllerResetPasswordResponse:
    content_type: str = field()
    status_code: int = field()
    
