from dataclasses import dataclass, field



@dataclass
class SessionControllerChangePasswordPathParams:
    short_name: str = field(metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclass
class SessionControllerChangePasswordQueryParams:
    new_password: str = field(metadata={'query_param': { 'field_name': 'newPassword', 'style': 'form', 'explode': True }})
    old_password: str = field(metadata={'query_param': { 'field_name': 'oldPassword', 'style': 'form', 'explode': True }})
    token: str = field(metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class SessionControllerChangePasswordRequest:
    path_params: SessionControllerChangePasswordPathParams = field()
    query_params: SessionControllerChangePasswordQueryParams = field()
    

@dataclass
class SessionControllerChangePasswordResponse:
    content_type: str = field()
    status_code: int = field()
    
