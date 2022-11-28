from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetWorkspacesWorkspaceIDPathParams:
    workspace_id: str = field(metadata={'path_param': { 'field_name': 'workspace_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWorkspacesWorkspaceIDSecurity:
    bearer: shared.SchemeBearer = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetWorkspacesWorkspaceIDRequest:
    path_params: GetWorkspacesWorkspaceIDPathParams = field()
    security: GetWorkspacesWorkspaceIDSecurity = field()
    

@dataclass
class GetWorkspacesWorkspaceIDResponse:
    content_type: str = field()
    status_code: int = field()
    
