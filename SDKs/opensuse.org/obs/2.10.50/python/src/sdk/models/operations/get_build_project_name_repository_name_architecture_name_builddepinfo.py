from dataclasses import dataclass, field
from typing import Enum,Optional


@dataclass
class GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoPathParams:
    architecture_name: str = field(default=None, metadata={'path_param': { 'field_name': 'architecture_name', 'style': 'simple', 'explode': False }})
    project_name: str = field(default=None, metadata={'path_param': { 'field_name': 'project_name', 'style': 'simple', 'explode': False }})
    repository_name: str = field(default=None, metadata={'path_param': { 'field_name': 'repository_name', 'style': 'simple', 'explode': False }})
    
class GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoViewEnum(str, Enum):
    PKGNAMES = "pkgnames"
    REVPKGNAMES = "revpkgnames"
    ORDER = "order"


@dataclass
class GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoQueryParams:
    package: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'package', 'style': 'form', 'explode': True }})
    view: Optional[GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoViewEnum] = field(default=None, metadata={'query_param': { 'field_name': 'view', 'style': 'form', 'explode': True }})
    

@dataclass
class GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoRequest:
    path_params: GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoPathParams = field(default=None)
    query_params: GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoQueryParams = field(default=None)
    security: GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoSecurity = field(default=None)
    

@dataclass
class GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
