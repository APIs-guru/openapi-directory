from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetWorkspaceIDMembersIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    workspace_id: str = field(metadata={'path_param': { 'field_name': 'workspace_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWorkspaceIDMembersIDSecurity:
    bearer: shared.SchemeBearer = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetWorkspaceIDMembersIDRequest:
    path_params: GetWorkspaceIDMembersIDPathParams = field()
    security: GetWorkspaceIDMembersIDSecurity = field()
    

@dataclass
class GetWorkspaceIDMembersIDResponse:
    content_type: str = field()
    status_code: int = field()
    
