from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class GetWorkspaceIDActivityTypesPathParams:
    workspace_id: str = field(metadata={'path_param': { 'field_name': 'workspace_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWorkspaceIDActivityTypesSecurity:
    bearer: shared.SchemeBearer = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetWorkspaceIDActivityTypesRequest:
    path_params: GetWorkspaceIDActivityTypesPathParams = field()
    security: GetWorkspaceIDActivityTypesSecurity = field()
    

@dataclass
class GetWorkspaceIDActivityTypesResponse:
    content_type: str = field()
    status_code: int = field()
    
