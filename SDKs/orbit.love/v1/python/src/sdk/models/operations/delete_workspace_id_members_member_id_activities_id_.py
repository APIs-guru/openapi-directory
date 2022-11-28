from dataclasses import dataclass, field
from sdk.models import shared


@dataclass
class DeleteWorkspaceIDMembersMemberIDActivitiesIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    member_id: str = field(metadata={'path_param': { 'field_name': 'member_id', 'style': 'simple', 'explode': False }})
    workspace_id: str = field(metadata={'path_param': { 'field_name': 'workspace_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteWorkspaceIDMembersMemberIDActivitiesIDSecurity:
    bearer: shared.SchemeBearer = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class DeleteWorkspaceIDMembersMemberIDActivitiesIDRequest:
    path_params: DeleteWorkspaceIDMembersMemberIDActivitiesIDPathParams = field()
    security: DeleteWorkspaceIDMembersMemberIDActivitiesIDSecurity = field()
    

@dataclass
class DeleteWorkspaceIDMembersMemberIDActivitiesIDResponse:
    content_type: str = field()
    status_code: int = field()
    
