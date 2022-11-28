from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class PostBuildProjectNamePathParams:
    project_name: str = field(metadata={'path_param': { 'field_name': 'project_name', 'style': 'simple', 'explode': False }})
    
class PostBuildProjectNameCmdEnum(str, Enum):
    WIPE = "wipe"
    RESTARTBUILD = "restartbuild"
    KILLBUILD = "killbuild"
    ABORTBUILD = "abortbuild"
    REBUILD = "rebuild"
    UNPUBLISH = "unpublish"
    SENDSYSRQ = "sendsysrq"


@dataclass
class PostBuildProjectNameQueryParams:
    cmd: PostBuildProjectNameCmdEnum = field(metadata={'query_param': { 'field_name': 'cmd', 'style': 'form', 'explode': True }})
    arch: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'arch', 'style': 'form', 'explode': True }})
    package: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'package', 'style': 'form', 'explode': True }})
    repository: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'repository', 'style': 'form', 'explode': True }})
    

@dataclass
class PostBuildProjectNameSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostBuildProjectNameRequest:
    path_params: PostBuildProjectNamePathParams = field()
    query_params: PostBuildProjectNameQueryParams = field()
    security: PostBuildProjectNameSecurity = field()
    

@dataclass
class PostBuildProjectNameResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
