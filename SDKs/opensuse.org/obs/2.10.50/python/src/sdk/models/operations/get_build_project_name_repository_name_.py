from dataclasses import dataclass, field



@dataclass
class GetBuildProjectNameRepositoryNamePathParams:
    project_name: str = field(default=None, metadata={'path_param': { 'field_name': 'project_name', 'style': 'simple', 'explode': False }})
    repository_name: str = field(default=None, metadata={'path_param': { 'field_name': 'repository_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBuildProjectNameRepositoryNameSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetBuildProjectNameRepositoryNameRequest:
    path_params: GetBuildProjectNameRepositoryNamePathParams = field(default=None)
    security: GetBuildProjectNameRepositoryNameSecurity = field(default=None)
    

@dataclass
class GetBuildProjectNameRepositoryNameResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
