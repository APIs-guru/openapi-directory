from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SessionControllerLoginPathParams:
    short_name: str = field(metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclass
class SessionControllerLoginQueryParams:
    password: str = field(metadata={'query_param': { 'field_name': 'password', 'style': 'form', 'explode': True }})
    username: str = field(metadata={'query_param': { 'field_name': 'username', 'style': 'form', 'explode': True }})
    

@dataclass
class SessionControllerLoginRequest:
    path_params: SessionControllerLoginPathParams = field()
    query_params: SessionControllerLoginQueryParams = field()
    

@dataclass
class SessionControllerLoginResponse:
    content_type: str = field()
    status_code: int = field()
    session_controller_login_200_application_json_string: Optional[str] = field(default=None)
    session_controller_login_200_application_xml_string: Optional[str] = field(default=None)
    session_controller_login_200_text_json_string: Optional[str] = field(default=None)
    session_controller_login_200_text_xml_string: Optional[str] = field(default=None)
    
