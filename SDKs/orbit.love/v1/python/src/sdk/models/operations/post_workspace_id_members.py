from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostWorkspaceIDMembersPathParams:
    workspace_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostWorkspaceIDMembersSecurity:
    bearer: shared.SchemeBearer = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostWorkspaceIDMembersRequest:
    path_params: PostWorkspaceIDMembersPathParams = field(default=None)
    request: Optional[shared.MemberAndIdentity] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostWorkspaceIDMembersSecurity = field(default=None)
    

@dataclass
class PostWorkspaceIDMembersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
