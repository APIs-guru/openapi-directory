from dataclasses import dataclass, field



@dataclass
class DeleteWorkspaceIDMembersIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    workspace_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteWorkspaceIDMembersIDSecurity:
    bearer: shared.SchemeBearer = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteWorkspaceIDMembersIDRequest:
    path_params: DeleteWorkspaceIDMembersIDPathParams = field(default=None)
    security: DeleteWorkspaceIDMembersIDSecurity = field(default=None)
    

@dataclass
class DeleteWorkspaceIDMembersIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
