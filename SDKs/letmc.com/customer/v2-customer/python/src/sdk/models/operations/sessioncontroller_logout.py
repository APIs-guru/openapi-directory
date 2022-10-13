from dataclasses import dataclass, field



@dataclass
class SessionControllerLogoutPathParams:
    short_name: str = field(default=None, metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclass
class SessionControllerLogoutQueryParams:
    token: str = field(default=None, metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class SessionControllerLogoutRequest:
    path_params: SessionControllerLogoutPathParams = field(default=None)
    query_params: SessionControllerLogoutQueryParams = field(default=None)
    

@dataclass
class SessionControllerLogoutResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
