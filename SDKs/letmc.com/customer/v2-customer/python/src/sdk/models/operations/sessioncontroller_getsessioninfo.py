from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SessionControllerGetSessionInfoPathParams:
    short_name: str = field(default=None, metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclass
class SessionControllerGetSessionInfoQueryParams:
    token: str = field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class SessionControllerGetSessionInfoRequest:
    path_params: SessionControllerGetSessionInfoPathParams = field(default=None)
    query_params: SessionControllerGetSessionInfoQueryParams = field(default=None)
    

@dataclass
class SessionControllerGetSessionInfoResponse:
    content_type: str = field(default=None)
    session_controller_get_session_info_200_application_json_string: Optional[str] = field(default=None)
    session_controller_get_session_info_200_application_xml_string: Optional[str] = field(default=None)
    session_controller_get_session_info_200_text_json_string: Optional[str] = field(default=None)
    session_controller_get_session_info_200_text_xml_string: Optional[str] = field(default=None)
    status_code: int = field(default=None)
    
