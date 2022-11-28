from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetWorkspaceIDMembersMemberIDNotesPathParams:
    member_id: str = field(metadata={'path_param': { 'field_name': 'member_id', 'style': 'simple', 'explode': False }})
    workspace_id: str = field(metadata={'path_param': { 'field_name': 'workspace_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWorkspaceIDMembersMemberIDNotesQueryParams:
    page: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetWorkspaceIDMembersMemberIDNotesSecurity:
    bearer: shared.SchemeBearer = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetWorkspaceIDMembersMemberIDNotesRequest:
    path_params: GetWorkspaceIDMembersMemberIDNotesPathParams = field()
    query_params: GetWorkspaceIDMembersMemberIDNotesQueryParams = field()
    security: GetWorkspaceIDMembersMemberIDNotesSecurity = field()
    

@dataclass
class GetWorkspaceIDMembersMemberIDNotesResponse:
    content_type: str = field()
    status_code: int = field()
    
