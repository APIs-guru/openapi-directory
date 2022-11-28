from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostWorkspaceIDMembersPathParams:
    workspace_id: str = field(metadata={'path_param': { 'field_name': 'workspace_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostWorkspaceIDMembersSecurity:
    bearer: shared.SchemeBearer = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostWorkspaceIDMembersRequest:
    path_params: PostWorkspaceIDMembersPathParams = field()
    security: PostWorkspaceIDMembersSecurity = field()
    request: Optional[shared.MemberAndIdentity] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostWorkspaceIDMembersResponse:
    content_type: str = field()
    status_code: int = field()
    
