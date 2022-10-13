from dataclasses import dataclass, field



@dataclass
class SetProjectConfigPathParams:
    project_id: int = field(default=None, metadata={'path_param': { 'field_name': 'project-id', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetProjectConfigSecurity:
    access_token: shared.SchemeAccessToken = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'bearer' }})
    

@dataclass
class SetProjectConfigRequest:
    path_params: SetProjectConfigPathParams = field(default=None)
    request: bytes = field(default=None, metadata={'request': { 'media_type': 'application/x-yaml' }})
    security: SetProjectConfigSecurity = field(default=None)
    

@dataclass
class SetProjectConfigResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
