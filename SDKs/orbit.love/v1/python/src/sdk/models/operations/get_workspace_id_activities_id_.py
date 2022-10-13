from dataclasses import dataclass, field



@dataclass
class GetWorkspaceIDActivitiesIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    workspace_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWorkspaceIDActivitiesIDSecurity:
    bearer: shared.SchemeBearer = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetWorkspaceIDActivitiesIDRequest:
    path_params: GetWorkspaceIDActivitiesIDPathParams = field(default=None)
    security: GetWorkspaceIDActivitiesIDSecurity = field(default=None)
    

@dataclass
class GetWorkspaceIDActivitiesIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
