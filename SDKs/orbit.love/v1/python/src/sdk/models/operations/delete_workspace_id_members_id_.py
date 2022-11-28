from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteWorkspaceIDMembersIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    workspace_id: str = field(metadata={'path_param': { 'field_name': 'workspace_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteWorkspaceIDMembersIDSecurity:
    bearer: shared.SchemeBearer = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteWorkspaceIDMembersIDRequest:
    path_params: DeleteWorkspaceIDMembersIDPathParams = field()
    security: DeleteWorkspaceIDMembersIDSecurity = field()
    

@dataclass
class DeleteWorkspaceIDMembersIDResponse:
    content_type: str = field()
    status_code: int = field()
    
