from dataclasses import dataclass, field



@dataclass
class SessionControllerLogoutPathParams:
    short_name: str = field(metadata={'path_param': { 'field_name': 'shortName', 'style': 'simple', 'explode': False }})
    

@dataclass
class SessionControllerLogoutQueryParams:
    token: str = field(metadata={'query_param': { 'field_name': 'token', 'style': 'form', 'explode': True }})
    

@dataclass
class SessionControllerLogoutRequest:
    path_params: SessionControllerLogoutPathParams = field()
    query_params: SessionControllerLogoutQueryParams = field()
    

@dataclass
class SessionControllerLogoutResponse:
    content_type: str = field()
    status_code: int = field()
    
