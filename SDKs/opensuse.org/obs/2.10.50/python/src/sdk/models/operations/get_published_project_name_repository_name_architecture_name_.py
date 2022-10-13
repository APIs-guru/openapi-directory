from dataclasses import dataclass, field



@dataclass
class GetPublishedProjectNameRepositoryNameArchitectureNamePathParams:
    architecture_name: str = field(default=None, metadata={'path_param': { 'field_name': 'architecture_name', 'style': 'simple', 'explode': False }})
    project_name: str = field(default=None, metadata={'path_param': { 'field_name': 'project_name', 'style': 'simple', 'explode': False }})
    repository_name: str = field(default=None, metadata={'path_param': { 'field_name': 'repository_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPublishedProjectNameRepositoryNameArchitectureNameSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetPublishedProjectNameRepositoryNameArchitectureNameRequest:
    path_params: GetPublishedProjectNameRepositoryNameArchitectureNamePathParams = field(default=None)
    security: GetPublishedProjectNameRepositoryNameArchitectureNameSecurity = field(default=None)
    

@dataclass
class GetPublishedProjectNameRepositoryNameArchitectureNameResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
