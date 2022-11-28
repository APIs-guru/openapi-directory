from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class PostPersonLoginPathParams:
    login: str = field(metadata={'path_param': { 'field_name': 'login', 'style': 'simple', 'explode': False }})
    
class PostPersonLoginCmdEnum(str, Enum):
    CHANGE_PASSWORD = "change_password"
    LOCK = "lock"
    DELETE = "delete"


@dataclass
class PostPersonLoginQueryParams:
    cmd: PostPersonLoginCmdEnum = field(metadata={'query_param': { 'field_name': 'cmd', 'style': 'form', 'explode': True }})
    

@dataclass
class PostPersonLoginSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostPersonLoginRequest:
    path_params: PostPersonLoginPathParams = field()
    query_params: PostPersonLoginQueryParams = field()
    security: PostPersonLoginSecurity = field()
    request: Optional[str] = field(default=None, metadata={'request': { 'media_type': 'text/plain' }})
    

@dataclass
class PostPersonLoginResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
