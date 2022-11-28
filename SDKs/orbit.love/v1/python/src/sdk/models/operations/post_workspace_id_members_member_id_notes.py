from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostWorkspaceIDMembersMemberIDNotesPathParams:
    member_id: str = field(metadata={'path_param': { 'field_name': 'member_id', 'style': 'simple', 'explode': False }})
    workspace_id: str = field(metadata={'path_param': { 'field_name': 'workspace_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostWorkspaceIDMembersMemberIDNotesSecurity:
    bearer: shared.SchemeBearer = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostWorkspaceIDMembersMemberIDNotesRequest:
    path_params: PostWorkspaceIDMembersMemberIDNotesPathParams = field()
    security: PostWorkspaceIDMembersMemberIDNotesSecurity = field()
    request: Optional[shared.Note] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostWorkspaceIDMembersMemberIDNotesResponse:
    content_type: str = field()
    status_code: int = field()
    
