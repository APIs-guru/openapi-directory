from dataclasses import dataclass, field



@dataclass
class GetPublishedProjectNameRepositoryNamePathParams:
    project_name: str = field(default=None, metadata={'path_param': { 'field_name': 'project_name', 'style': 'simple', 'explode': False }})
    repository_name: str = field(default=None, metadata={'path_param': { 'field_name': 'repository_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPublishedProjectNameRepositoryNameSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetPublishedProjectNameRepositoryNameRequest:
    path_params: GetPublishedProjectNameRepositoryNamePathParams = field(default=None)
    security: GetPublishedProjectNameRepositoryNameSecurity = field(default=None)
    

@dataclass
class GetPublishedProjectNameRepositoryNameResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
