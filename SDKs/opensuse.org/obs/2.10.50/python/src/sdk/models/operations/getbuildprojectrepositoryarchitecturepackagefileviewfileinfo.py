from dataclasses import dataclass, field
from typing import List,Optional
from enum import Enum
from sdk.models import shared


@dataclass
class GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoPathParams:
    architecture_name: str = field(metadata={'path_param': { 'field_name': 'architecture_name', 'style': 'simple', 'explode': False }})
    file_name: str = field(metadata={'path_param': { 'field_name': 'file_name', 'style': 'simple', 'explode': False }})
    package_name: str = field(metadata={'path_param': { 'field_name': 'package_name', 'style': 'simple', 'explode': False }})
    project_name: str = field(metadata={'path_param': { 'field_name': 'project_name', 'style': 'simple', 'explode': False }})
    repository_name: str = field(metadata={'path_param': { 'field_name': 'repository_name', 'style': 'simple', 'explode': False }})
    
class GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoViewEnum(str, Enum):
    FILEINFO = "fileinfo"
    FILEINFO_EXT = "fileinfo_ext"


@dataclass
class GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoQueryParams:
    view: List[GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoViewEnum] = field(metadata={'query_param': { 'field_name': 'view', 'style': 'form', 'explode': True }})
    

@dataclass
class GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoRequest:
    path_params: GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoPathParams = field()
    query_params: GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoQueryParams = field()
    security: GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoSecurity = field()
    

@dataclass
class GetBuildProjectRepositoryArchitecturePackageFileViewFileinfoResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
