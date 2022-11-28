from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class PostPersonLoginTokenPathParams:
    login: str = field(metadata={'path_param': { 'field_name': 'login', 'style': 'simple', 'explode': False }})
    
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
    basic_authentication: shared.SchemeBasicAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostPersonLoginTokenRequest:
    path_params: PostPersonLoginTokenPathParams = field()
    query_params: PostPersonLoginTokenQueryParams = field()
    security: PostPersonLoginTokenSecurity = field()
    

@dataclass
class PostPersonLoginTokenResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
