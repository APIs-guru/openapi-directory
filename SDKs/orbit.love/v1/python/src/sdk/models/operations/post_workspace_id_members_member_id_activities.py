from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class PostWorkspaceIDMembersMemberIDActivitiesPathParams:
    member_id: str = field(default=None, metadata={'path_param': { 'field_name': 'member_id', 'style': 'simple', 'explode': False }})
    workspace_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostWorkspaceIDMembersMemberIDActivitiesSecurity:
    bearer: shared.SchemeBearer = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostWorkspaceIDMembersMemberIDActivitiesRequest:
    path_params: PostWorkspaceIDMembersMemberIDActivitiesPathParams = field(default=None)
    request: Optional[Any] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostWorkspaceIDMembersMemberIDActivitiesSecurity = field(default=None)
    

@dataclass
class PostWorkspaceIDMembersMemberIDActivitiesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
