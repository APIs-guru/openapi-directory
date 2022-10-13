from dataclasses import dataclass, field



@dataclass
class GetWorkspaceIDMembersIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    workspace_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWorkspaceIDMembersIDSecurity:
    bearer: shared.SchemeBearer = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetWorkspaceIDMembersIDRequest:
    path_params: GetWorkspaceIDMembersIDPathParams = field(default=None)
    security: GetWorkspaceIDMembersIDSecurity = field(default=None)
    

@dataclass
class GetWorkspaceIDMembersIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
