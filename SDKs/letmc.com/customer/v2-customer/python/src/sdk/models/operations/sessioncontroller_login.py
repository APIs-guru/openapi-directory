from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SessionControllerLoginPathParams:
    short_name: str = field(default=None, metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclass
class SessionControllerLoginQueryParams:
    password: str = field(default=None, metadata={'query_param': { 'field_name': 'password', 'style': 'form', 'explode': True }})
    username: str = field(default=None, metadata={'query_param': { 'field_name': 'username', 'style': 'form', 'explode': True }})
    

@dataclass
class SessionControllerLoginRequest:
    path_params: SessionControllerLoginPathParams = field(default=None)
    query_params: SessionControllerLoginQueryParams = field(default=None)
    

@dataclass
class SessionControllerLoginResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    session_controller_login_200_application_json_string: Optional[str] = field(default=None)
    session_controller_login_200_text_json_string: Optional[str] = field(default=None)
    status_code: int = field(default=None)
    
