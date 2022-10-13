from dataclasses import dataclass, field
from typing import Enum,Optional


@dataclass
class PostPersonLoginTokenPathParams:
    login: str = field(default=None, metadata={'path_param': { 'field_name': 'login', 'style': 'simple', 'explode': False }})
    
class PostPersonLoginTokenOperationEnum(str, Enum):
    RUNSERVICE = "runservice"
    REBUILD = "rebuild"
    RELEASE = "release"


@dataclass
class PostPersonLoginTokenQueryParams:
    operation: Optional[PostPersonLoginTokenOperationEnum] = field(default=None, metadata={'query_param': { 'field_name': 'operation', 'style': 'form', 'explode': True }})
    package: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'package', 'style': 'form', 'explode': True }})
    project: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'project', 'style': 'form', 'explode': True }})
    scm_token: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'scm_token', 'style': 'form', 'explode': True }})
    

@dataclass
class PostPersonLoginTokenSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostPersonLoginTokenRequest:
    path_params: PostPersonLoginTokenPathParams = field(default=None)
    query_params: PostPersonLoginTokenQueryParams = field(default=None)
    security: PostPersonLoginTokenSecurity = field(default=None)
    

@dataclass
class PostPersonLoginTokenResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
