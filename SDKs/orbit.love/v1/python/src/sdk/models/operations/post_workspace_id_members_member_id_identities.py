from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostWorkspaceIDMembersMemberIDIdentitiesPathParams:
    member_id: str = field(metadata={'path_param': { 'field_name': 'member_id', 'style': 'simple', 'explode': False }})
    workspace_id: str = field(metadata={'path_param': { 'field_name': 'workspace_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostWorkspaceIDMembersMemberIDIdentitiesSecurity:
    bearer: shared.SchemeBearer = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostWorkspaceIDMembersMemberIDIdentitiesRequest:
    path_params: PostWorkspaceIDMembersMemberIDIdentitiesPathParams = field()
    security: PostWorkspaceIDMembersMemberIDIdentitiesSecurity = field()
    request: Optional[shared.Identity] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PostWorkspaceIDMembersMemberIDIdentitiesResponse:
    content_type: str = field()
    status_code: int = field()
    
