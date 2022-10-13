from dataclasses import dataclass, field



@dataclass
class GetWorkspacesWorkspaceIDPathParams:
    workspace_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWorkspacesWorkspaceIDSecurity:
    bearer: shared.SchemeBearer = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetWorkspacesWorkspaceIDRequest:
    path_params: GetWorkspacesWorkspaceIDPathParams = field(default=None)
    security: GetWorkspacesWorkspaceIDSecurity = field(default=None)
    

@dataclass
class GetWorkspacesWorkspaceIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
