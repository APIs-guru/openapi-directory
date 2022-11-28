from dataclasses import dataclass, field
from typing import Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoPathParams:
    architecture_name: str = field(metadata={'path_param': { 'field_name': 'architecture_name', 'style': 'simple', 'explode': False }})
    project_name: str = field(metadata={'path_param': { 'field_name': 'project_name', 'style': 'simple', 'explode': False }})
    repository_name: str = field(metadata={'path_param': { 'field_name': 'repository_name', 'style': 'simple', 'explode': False }})
    
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
    basic_authentication: shared.SchemeBasicAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoRequest:
    path_params: GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoPathParams = field()
    query_params: GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoQueryParams = field()
    security: GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoSecurity = field()
    

@dataclass
class GetBuildProjectNameRepositoryNameArchitectureNameBuilddepinfoResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
