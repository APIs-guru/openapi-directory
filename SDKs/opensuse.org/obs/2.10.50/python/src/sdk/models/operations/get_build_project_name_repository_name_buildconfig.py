from dataclasses import dataclass, field



@dataclass
class GetBuildProjectNameRepositoryNameBuildconfigPathParams:
    project_name: str = field(default=None, metadata={'path_param': { 'field_name': 'project_name', 'style': 'simple', 'explode': False }})
    repository_name: str = field(default=None, metadata={'path_param': { 'field_name': 'repository_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBuildProjectNameRepositoryNameBuildconfigSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetBuildProjectNameRepositoryNameBuildconfigRequest:
    path_params: GetBuildProjectNameRepositoryNameBuildconfigPathParams = field(default=None)
    security: GetBuildProjectNameRepositoryNameBuildconfigSecurity = field(default=None)
    

@dataclass
class GetBuildProjectNameRepositoryNameBuildconfigResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
