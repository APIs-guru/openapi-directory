from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetBuildProjectRepositoryArchitecturePackageFilePathParams:
    architecture_name: str = field(metadata={'path_param': { 'field_name': 'architecture_name', 'style': 'simple', 'explode': False }})
    file_name: str = field(metadata={'path_param': { 'field_name': 'file_name', 'style': 'simple', 'explode': False }})
    package_name: str = field(metadata={'path_param': { 'field_name': 'package_name', 'style': 'simple', 'explode': False }})
    project_name: str = field(metadata={'path_param': { 'field_name': 'project_name', 'style': 'simple', 'explode': False }})
    repository_name: str = field(metadata={'path_param': { 'field_name': 'repository_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBuildProjectRepositoryArchitecturePackageFileSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetBuildProjectRepositoryArchitecturePackageFileRequest:
    path_params: GetBuildProjectRepositoryArchitecturePackageFilePathParams = field()
    security: GetBuildProjectRepositoryArchitecturePackageFileSecurity = field()
    

@dataclass
class GetBuildProjectRepositoryArchitecturePackageFileResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    get_build_project_repository_architecture_package_file_200_application_wildcard_binary_string: Optional[bytes] = field(default=None)
    
