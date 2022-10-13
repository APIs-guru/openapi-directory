from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetBuildProjectRepositoryArchitecturePackageFilePathParams:
    architecture_name: str = field(default=None, metadata={'path_param': { 'field_name': 'architecture_name', 'style': 'simple', 'explode': False }})
    file_name: str = field(default=None, metadata={'path_param': { 'field_name': 'file_name', 'style': 'simple', 'explode': False }})
    package_name: str = field(default=None, metadata={'path_param': { 'field_name': 'package_name', 'style': 'simple', 'explode': False }})
    project_name: str = field(default=None, metadata={'path_param': { 'field_name': 'project_name', 'style': 'simple', 'explode': False }})
    repository_name: str = field(default=None, metadata={'path_param': { 'field_name': 'repository_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBuildProjectRepositoryArchitecturePackageFileSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetBuildProjectRepositoryArchitecturePackageFileRequest:
    path_params: GetBuildProjectRepositoryArchitecturePackageFilePathParams = field(default=None)
    security: GetBuildProjectRepositoryArchitecturePackageFileSecurity = field(default=None)
    

@dataclass
class GetBuildProjectRepositoryArchitecturePackageFileResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_build_project_repository_architecture_package_file_200_application_wildcard_binary_string: Optional[bytes] = field(default=None)
    
