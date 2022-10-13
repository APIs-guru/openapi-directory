from dataclasses import dataclass, field



@dataclass
class GetBuildProjectNamePathParams:
    project_name: str = field(default=None, metadata={'path_param': { 'field_name': 'project_name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetBuildProjectNameSecurity:
    basic_authentication: shared.SchemeBasicAuthentication = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetBuildProjectNameRequest:
    path_params: GetBuildProjectNamePathParams = field(default=None)
    security: GetBuildProjectNameSecurity = field(default=None)
    

@dataclass
class GetBuildProjectNameResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
