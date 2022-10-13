from dataclasses import dataclass, field



@dataclass
class GetWorkspaceIDActivityTypesPathParams:
    workspace_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWorkspaceIDActivityTypesSecurity:
    bearer: shared.SchemeBearer = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetWorkspaceIDActivityTypesRequest:
    path_params: GetWorkspaceIDActivityTypesPathParams = field(default=None)
    security: GetWorkspaceIDActivityTypesSecurity = field(default=None)
    

@dataclass
class GetWorkspaceIDActivityTypesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
