from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetWorkspaceIDMembersMemberIDNotesPathParams:
    member_id: str = field(default=None, metadata={'path_param': { 'field_name': 'member_id', 'style': 'simple', 'explode': False }})
    workspace_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWorkspaceIDMembersMemberIDNotesQueryParams:
    page: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    

@dataclass
class GetWorkspaceIDMembersMemberIDNotesSecurity:
    bearer: shared.SchemeBearer = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetWorkspaceIDMembersMemberIDNotesRequest:
    path_params: GetWorkspaceIDMembersMemberIDNotesPathParams = field(default=None)
    query_params: GetWorkspaceIDMembersMemberIDNotesQueryParams = field(default=None)
    security: GetWorkspaceIDMembersMemberIDNotesSecurity = field(default=None)
    

@dataclass
class GetWorkspaceIDMembersMemberIDNotesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
