from dataclasses import dataclass, field



@dataclass
class GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonPathParams:
    architecture_name: str = field(default=None, metadata={'path_param': { 'field_name': 'architecture_name', 'style': 'simple', 'explode': False }})
    package_name: str = field(default=None, metadata={'path_param': { 'field_name': 'package_name', 'style': 'simple', 'explode': False }})
    project_name: str = field(default=None, metadata={'path_param': { 'field_name': 'project_name', 'style': 'simple', 'explode': False }})
    repository_name: str = field(default=None, metadata={'path_param': { 'field_name': 'repository_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonRequest:
    path_params: GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonPathParams = field(default=None)
    security: GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonSecurity = field(default=None)
    

@dataclass
class GetBuildProjectNameRepositoryNameArchitectureNamePackageNameReasonResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
