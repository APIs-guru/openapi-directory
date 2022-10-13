from dataclasses import dataclass, field
from typing import Enum,Optional


@dataclass
class PostBuildProjectNamePathParams:
    project_name: str = field(default=None, metadata={'path_param': { 'field_name': 'project_name', 'style': 'simple', 'explode': False }})
    
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
    arch: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'arch', 'style': 'form', 'explode': True }})
    cmd: PostBuildProjectNameCmdEnum = field(default=None, metadata={'query_param': { 'field_name': 'cmd', 'style': 'form', 'explode': True }})
    package: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'package', 'style': 'form', 'explode': True }})
    repository: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'repository', 'style': 'form', 'explode': True }})
    

@dataclass
class PostBuildProjectNameSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class PostBuildProjectNameRequest:
    path_params: PostBuildProjectNamePathParams = field(default=None)
    query_params: PostBuildProjectNameQueryParams = field(default=None)
    security: PostBuildProjectNameSecurity = field(default=None)
    

@dataclass
class PostBuildProjectNameResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
