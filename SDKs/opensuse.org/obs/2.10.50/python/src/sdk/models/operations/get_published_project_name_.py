from dataclasses import dataclass, field



@dataclass
class GetPublishedProjectNamePathParams:
    project_name: str = field(default=None, metadata={'path_param': { 'field_name': 'project_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetPublishedProjectNameSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetPublishedProjectNameRequest:
    path_params: GetPublishedProjectNamePathParams = field(default=None)
    security: GetPublishedProjectNameSecurity = field(default=None)
    

@dataclass
class GetPublishedProjectNameResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
