from dataclasses import dataclass, field
from typing import Enum,Optional


@dataclass
class GetBuildProjectNameResultPathParams:
    project_name: str = field(default=None, metadata={'path_param': { 'field_name': 'project_name', 'style': 'simple', 'explode': False }})
    
class GetBuildProjectNameResultViewEnum(str, Enum):
    SUMMARY = "summary"
    STATUS = "status"
    BINARYLIST = "binarylist"


@dataclass
class GetBuildProjectNameResultQueryParams:
    arch: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'arch', 'style': 'form', 'explode': True }})
    lastbuild: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'lastbuild', 'style': 'form', 'explode': True }})
    locallink: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'locallink', 'style': 'form', 'explode': True }})
    multibuild: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'multibuild', 'style': 'form', 'explode': True }})
    package: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'package', 'style': 'form', 'explode': True }})
    repository: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'repository', 'style': 'form', 'explode': True }})
    view: Optional[GetBuildProjectNameResultViewEnum] = field(default=None, metadata={'query_param': { 'field_name': 'view', 'style': 'form', 'explode': True }})
    

@dataclass
class GetBuildProjectNameResultSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetBuildProjectNameResultRequest:
    path_params: GetBuildProjectNameResultPathParams = field(default=None)
    query_params: GetBuildProjectNameResultQueryParams = field(default=None)
    security: GetBuildProjectNameResultSecurity = field(default=None)
    

@dataclass
class GetBuildProjectNameResultResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
