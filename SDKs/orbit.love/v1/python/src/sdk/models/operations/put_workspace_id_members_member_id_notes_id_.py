from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PutWorkspaceIDMembersMemberIDNotesIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    member_id: str = field(default=None, metadata={'path_param': { 'field_name': 'member_id', 'style': 'simple', 'explode': False }})
    workspace_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutWorkspaceIDMembersMemberIDNotesIDSecurity:
    bearer: shared.SchemeBearer = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PutWorkspaceIDMembersMemberIDNotesIDRequest:
    path_params: PutWorkspaceIDMembersMemberIDNotesIDPathParams = field(default=None)
    request: Optional[shared.Note] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PutWorkspaceIDMembersMemberIDNotesIDSecurity = field(default=None)
    

@dataclass
class PutWorkspaceIDMembersMemberIDNotesIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
