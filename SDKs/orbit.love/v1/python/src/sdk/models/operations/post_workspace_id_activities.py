from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class PostWorkspaceIDActivitiesPathParams:
    workspace_id: str = field(default=None, metadata={'path_param': { 'field_name': 'workspace_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PostWorkspaceIDActivitiesSecurity:
    bearer: shared.SchemeBearer = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PostWorkspaceIDActivitiesRequest:
    path_params: PostWorkspaceIDActivitiesPathParams = field(default=None)
    request: Optional[shared.ActivityAndIdentity] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: PostWorkspaceIDActivitiesSecurity = field(default=None)
    

@dataclass
class PostWorkspaceIDActivitiesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
