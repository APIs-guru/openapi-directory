from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetWorkspaceIDActivitiesIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    workspace_id: str = field(metadata={'path_param': { 'field_name': 'workspace_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWorkspaceIDActivitiesIDSecurity:
    bearer: shared.SchemeBearer = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetWorkspaceIDActivitiesIDRequest:
    path_params: GetWorkspaceIDActivitiesIDPathParams = field()
    security: GetWorkspaceIDActivitiesIDSecurity = field()
    

@dataclass
class GetWorkspaceIDActivitiesIDResponse:
    content_type: str = field()
    status_code: int = field()
    
