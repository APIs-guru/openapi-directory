from dataclasses import dataclass, field
from typing import Enum,List


@dataclass
class GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoPathParams:
    architecture_name: str = field(default=None, metadata={'path_param': { 'field_name': 'architecture_name', 'style': 'simple', 'explode': False }})
    file_name: str = field(default=None, metadata={'path_param': { 'field_name': 'file_name', 'style': 'simple', 'explode': False }})
    package_name: str = field(default=None, metadata={'path_param': { 'field_name': 'package_name', 'style': 'simple', 'explode': False }})
    project_name: str = field(default=None, metadata={'path_param': { 'field_name': 'project_name', 'style': 'simple', 'explode': False }})
    repository_name: str = field(default=None, metadata={'path_param': { 'field_name': 'repository_name', 'style': 'simple', 'explode': False }})
    
class GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoViewEnum(str, Enum):
    FILEINFO = "fileinfo"
    FILEINFO_EXT = "fileinfo_ext"


@dataclass
class GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoQueryParams:
    view: List[GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoViewEnum] = field(default=None, metadata={'query_param': { 'field_name': 'view', 'style': 'form', 'explode': True }})
    

@dataclass
class GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoRequest:
    path_params: GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoPathParams = field(default=None)
    query_params: GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoQueryParams = field(default=None)
    security: GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoSecurity = field(default=None)
    

@dataclass
class GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
