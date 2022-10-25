from dataclasses import dataclass, field
from typing import Enum,Optional


@dataclass
class PostPersonLoginPathParams:
    login: str = field(default=None, metadata={'path_param': { 'field_name': 'login', 'style': 'simple', 'explode': False }})
    
class PostPersonLoginCmdEnum(str, Enum):
    CHANGE_PASSWORD = "change_password"
    LOCK = "lock"
    DELETE = "delete"


@dataclass
class PostPersonLoginQueryParams:
    cmd: PostPersonLoginCmdEnum = field(default=None, metadata={'query_param': { 'field_name': 'cmd', 'style': 'form', 'explode': True }})
    

@dataclass
class PostPersonLoginSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostPersonLoginRequest:
    path_params: PostPersonLoginPathParams = field(default=None)
    query_params: PostPersonLoginQueryParams = field(default=None)
    request: Optional[str] = field(default=None, metadata={'request': { 'media_type': 'text/plain' }})
    security: PostPersonLoginSecurity = field(default=None)
    

@dataclass
class PostPersonLoginResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
